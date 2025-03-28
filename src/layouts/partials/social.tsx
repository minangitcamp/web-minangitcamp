import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

const socialLinks = [
  {
    href: "https://www.youtube.com/@minangitcamp",
    label: "Youtube",
    icon: (
      <IconBrandYoutubeFilled className="w-6 h-6 text-white hover:text-red-500 transition-colors duration-300" />
    ),
  },
  {
    href: "https://www.facebook.com/minangitcamp",
    label: "Facebook",
    icon: (
      <IconBrandFacebook className="w-6 h-6 text-white hover:text-red-500 transition-colors duration-300" />
    ),
  },
  {
    href: "https://github.com/minangitcamp",
    label: "Github",
    icon: (
      <IconBrandGithub className="w-6 h-6 text-white hover:text-red-500 transition-colors duration-300" />
    ),
  },
];

export default function FooterSocial() {
  return (
    <ul className="text-gray-400 text-sm md:text-base flex flex-row gap-4">
      {socialLinks.map((link) => (
        <li>
          <a
            href={link.href}
            className="hover:text-red-500 text-gray-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
