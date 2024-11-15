import React from "react";

const Maps = () => {
  return (
    // <div className="max-w-[1512px] mx-auto">
    <div className="w-full mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31717.877728656473!2d3.4498356!3d6.4281179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf513ff9bd641%3A0x596799a9108ac311!2sNew%20Dawn%20Baptist%20Church!5e0!3m2!1sen!2sng!4v1730126104922!5m2!1sen!2sng"
        style={{ border: 0 }}
        className="w-full h-[600px]"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Maps;
