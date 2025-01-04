'use client'

import { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

interface YouTubePlayerProps {
  videoId: string
  className?: string
}

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function YouTubePlayer({ videoId, className = '' }: YouTubePlayerProps) {
  const [player, setPlayer] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(`youtube-player-${videoId}`, {
        videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
          },
        },
      })
      setPlayer(newPlayer)
    }

    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [videoId])

  const togglePlay = () => {
    if (!player) return
    if (isPlaying) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  return (
    <div className={`relative aspect-video ${className}`}>
      <div id={`youtube-player-${videoId}`} className="absolute inset-0" />
      <button
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-40"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-16 h-16 text-white" />
        ) : (
          <Play className="w-16 h-16 text-white" />
        )}
      </button>
    </div>
  )
}

