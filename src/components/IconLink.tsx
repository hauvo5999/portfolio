import { FacebookIcon, GithubIcon, LinkedinIcon, InstagramIcon, Mail, Phone } from "lucide-react";
import React from "react";

const linkMap = {
  facebook: "https://facebook.com/voxuanhauBK",
  linkedin: "https://linkedin.com/in/voxuanhau",
  github: "https://github.com/hauvo5999",
  instagram: "https://instagram.com/vo.xuan.hau",
  mail: "mailto:voxuanhau1999@gmail.com",
  phone: "callto:+84339390851",
};

const ContactIcon: React.FC<{ iconType: keyof typeof linkMap }> = (props) => {
  const { iconType } = props;
  
  return (
    <a
      href={linkMap[iconType]}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center group"
      aria-label={iconType}
    >
      {(() => {
        switch (iconType) {
          case "facebook":
            return <FacebookIcon />;
          case "linkedin":
            return <LinkedinIcon />;
          case "github":
            return <GithubIcon />;
          case "instagram":
            return <InstagramIcon />;
          case "mail":
            return <Mail />
          case "phone":
            return <Phone />
          default:
            return null;
        }
      })()}
    </a>
  );
};

export default ContactIcon;