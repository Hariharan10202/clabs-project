import React from "react";

interface CTAProps {
  openSidebar: () => void;
}

const CTA: React.FC<CTAProps> = ({ openSidebar }) => {
  return (
    <div className="m-24">
      <button
        onClick={openSidebar}
        className="text-white p-2 border-2 rounded-sm border-white bg-transparent"
      >
        Save segment
      </button>
    </div>
  );
};

export default CTA;
