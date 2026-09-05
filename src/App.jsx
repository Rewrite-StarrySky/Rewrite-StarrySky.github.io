import React, { useState } from "react";
import StanfordTopBar from "./components/StanfordTopBar";
import ProfileHero from "./components/ProfileHero";
import AcademicTabs from "./components/AcademicTabs";
import PublicationsView from "./components/views/PublicationsView";
import BioView from "./components/views/BioView";
import ResearchView from "./components/views/ResearchView";
import ExperienceView from "./components/views/ExperienceView";
import EducationView from "./components/views/EducationView";
import TeachingServiceView from "./components/views/TeachingServiceView";
import CourseMaterialsView from "./components/views/CourseMaterialsView";
import BibtexModal from "./components/BibtexModal";
import StanfordFooter from "./components/StanfordFooter";
import "./App.css";

export default function App() {
  // Default to 'publications' to match the user's reference screenshot from Stanford Profiles
  const [activeTab, setActiveTab] = useState("publications");
  const [activeBibtexPublication, setActiveBibtexPublication] = useState(null);

  const handleOpenBibtex = (publication) => {
    setActiveBibtexPublication(publication);
  };

  const handleCloseBibtex = () => {
    setActiveBibtexPublication(null);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "publications":
        return <PublicationsView onOpenBibtex={handleOpenBibtex} />;
      case "bio":
        return <BioView onNavigateTab={setActiveTab} />;
      case "research":
        return <ResearchView />;
      case "experience":
        return <ExperienceView />;
      case "education":
        return <EducationView />;
      case "materials":
        return <CourseMaterialsView />;
      case "teaching":
        return <TeachingServiceView />;
      default:
        return <PublicationsView onOpenBibtex={handleOpenBibtex} />;
    }
  };

  return (
    <div className="stanford-profile-app">
      {/* Institutional Cardinal Red Top Bar */}
      <StanfordTopBar />

      {/* Profile Banner with Headshot, Name, Titles, and Actions */}
      <ProfileHero />

      {/* Horizontal Tab Navigation (Bio, Research, Experience, Publications, etc.) */}
      <AcademicTabs activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Two-Column Academic Content */}
      <main className="main-academic-layout">
        {renderActiveView()}
      </main>

      {/* Institutional Academic Footer */}
      <StanfordFooter />

      {/* Clean Academic BibTeX Modal */}
      {activeBibtexPublication && (
        <BibtexModal
          publication={activeBibtexPublication}
          onClose={handleCloseBibtex}
        />
      )}
    </div>
  );
}
