import Image from "next/image";
import { Bistre } from "@/components/ui/Bistre";

type BioProps = {
  name: string;
  role: string;
  paragraphs: string[];
  photo: { src: string; alt: string };
  /** Force grayscale on the photo — some persona pages ship theirs pre-graded (arik/jacqueline),
   * others ask for it in CSS (malorie-dreyfus): `filter: grayscale(1) contrast(1.02)`. */
  grayscale?: boolean;
};

/** A bistre "meet the person" section: a fixed-size portrait beside a name/role/bio block —
 * distinct from `DetailSplit` (variable-width photo, paired with a CTA) since this is pure
 * biography, no action expected from the reader here. */
export function Bio({ name, role, paragraphs, photo, grayscale }: BioProps) {
  return (
    <Bistre as="section" className="bio" data-screen-label="Bio">
      <div className="bio-inner">
        <Image
          className="bio-photo"
          src={photo.src}
          alt={photo.alt}
          width={333}
          height={413}
          style={grayscale ? { filter: "grayscale(1) contrast(1.02)" } : undefined}
        />
        <div className="bio-text">
          <h2 className="reveal">{name}</h2>
          <div className="bio-role reveal">{role}</div>
          {paragraphs.map((paragraph) => (
            <p className="reveal" key={paragraph.slice(0, 40)}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Bistre>
  );
}
