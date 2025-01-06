import React from "react";

interface GoogleMapProps {
  src?: string; // Make 'src' optional if you want to provide a default value
  width?: string;
  height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  src = "https://www.google.com/maps/embed?pb=!4v1736174116247!6m8!1m7!1sRjsXt1Dvbputve3YGg5O_Q!2m2!1d-7.760098438095344!2d109.654301736291!3f111.63625880067026!4f-4.719870466782609!5f0.7820865974627469",
  width = "600",
  height = "450",
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
