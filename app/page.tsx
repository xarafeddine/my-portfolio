import { Profile } from "./components/profile";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { About } from "./components/about";
import { EducationLanguages } from "./components/education-languages";
import { Certifications } from "./components/certifications";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <aside className="space-y-6">
            <Profile />
            <Skills />
            <Certifications />
            <EducationLanguages />
          </aside>

          {/* Main Content */}
          <main className="md:col-span-2">
            <About />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}
