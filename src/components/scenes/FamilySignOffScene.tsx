import { ScrollReveal } from "../ui/ScrollReveal";
import { weddingData } from "../../data/weddingData";
import { Botanical, Ornament } from "../ui/Ornament";

export function FamilySignOffScene() {
  return (
    <section id="family-sign-off" className="family-sign-off" aria-label="With affection from our families">
      <FloatingPetals count={6} />
      <Botanical className="family-foliage family-foliage-left" />
      <Botanical className="family-foliage family-foliage-right" />
      <div className="family-sign-off-copy">
        <Ornament className="family-top-ornament" />
        {weddingData.familySignOff.map((group, index) => (
          <ScrollReveal
            className="family-sign-off-group"
            key={group.heading}
          >
            {index > 0 && <Ornament className="family-divider" />}
            <h2>{group.heading}</h2>
            <div className="family-names">
              {group.names.map((name) => <p key={name}>{name}</p>)}
            </div>
          </ScrollReveal>
        ))}
        {/* Grandparents */}
        <ScrollReveal className="family-sign-off-group">
          <h2>Grandparents</h2>
          <div className="family-names">
            <p>{weddingData.grandparents}</p>
          </div>
        </ScrollReveal>
        {/* Invitation Preamble */}
        <ScrollReveal className="family-sign-off-group">
          <p className="invitation-preamble-text">{weddingData.invitationPreamble}</p>
        </ScrollReveal>
        {/* Couple with Parents */}
        <ScrollReveal className="family-sign-off-group">
          <h2>{weddingData.couple.groom}</h2>
          <div className="family-names">
            <p className="couple-parents">{weddingData.groomDetails}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal className="family-sign-off-group">
          <h2>{weddingData.couple.bride}</h2>
          <div className="family-names">
            <p className="couple-parents">{weddingData.brideDetails}</p>
          </div>
        </ScrollReveal>
        {/* Bride Village & Programme */}
        <ScrollReveal className="family-sign-off-group">
          <div className="family-names">
            <p className="bride-village-text">{weddingData.brideVillage}</p>
            <p className="programme-note-text">{weddingData.programmeNote}</p>
          </div>
        </ScrollReveal>
        {/* Address */}
        <ScrollReveal className="family-sign-off-group">
          <h2>Address</h2>
          <div className="family-names">
            <p className="invitation-address-text">{weddingData.invitationAddress}</p>
          </div>
        </ScrollReveal>
        {/* Phone Numbers */}
        <ScrollReveal className="family-sign-off-group">
          <h2>Contact</h2>
          <div className="family-names">
            <p className="phone-numbers-text">{weddingData.phoneNumbers.join("  |  ")}</p>
          </div>
        </ScrollReveal>
        {/* R.S.V.P. */}
        <ScrollReveal className="family-sign-off-group">
          <h2>R.S.V.P.:</h2>
          <div className="family-names">
            {weddingData.rsvpContacts.map((contact, i) => (
              <p key={i} className="rsvp-contact-text">{contact}</p>
            ))}
          </div>
        </ScrollReveal>
        <Ornament className="family-final-ornament" />
      </div>
    </section>
  );
}
import { FloatingPetals } from "../ui/FloatingPetals";
