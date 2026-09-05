import { notFound } from "next/navigation";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import { eventStories } from "@/data/eventStories";

import EventStoryHero from "@/sections/event-stories/EventStoryHero";
import EventStoryOverview from "@/sections/event-stories/EventStoryOverview";
import EventStoryDetails from "@/sections/event-stories/EventStoryDetails";
import EventStoryObjective from "@/sections/event-stories/EventStoryObjective";
import EventStoryDeliverables from "@/sections/event-stories/EventStoryDeliverables";
import EventStoryGallery from "@/sections/event-stories/EventStoryGallery";
import EventStoryVideo from "@/sections/event-stories/EventStoryVideo";
import RelatedEvents from "@/sections/event-stories/RelatedEvents";
import EventStoryCTA from "@/sections/event-stories/EventStoryCTA";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const event = eventStories.find(
    (item) => item.slug === slug
  );

  if (!event) {
    return {
      title: "Event Story | SATT Event Planners",
    };
  }

  return {
    title: `${event.title} | SATT Event Planners`,
    description: event.description,
  };
}


export default async function EventStoryPage({ params }) {
  const { slug } = await params;

  const event = eventStories.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">

        <EventStoryHero event={event} />

        <EventStoryOverview event={event} />

        <EventStoryDetails event={event} />

        <EventStoryObjective event={event} />

        <EventStoryDeliverables event={event} />

        <EventStoryGallery event={event} />

        <EventStoryVideo event={event} />

        <RelatedEvents event={event} />

        <EventStoryCTA event={event} />

      </main>

      <Footer />
    </>
  );
}