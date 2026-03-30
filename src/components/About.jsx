import React from 'react'
import aboutbanner from '../assets/aboutbanner.png'
import { Plus } from 'lucide-react'
import { BsGithub } from 'react-icons/bs';
export default function About({ setShowSection }) {
  const socialLinks = [
    {
      id: 1, href : 'https://github.com/byllzz' ,  icon: <BsGithub />
    }
  ];


  const handleToMain = () => {
    setShowSection('main');
  }

  return (
    <div className='w-full h-137 overflow-y-auto relative text-white flex flex-col items-center py-4" '>
      <button
        className="text-zinc-300 rounded-full cursor-pointer fixed top-53 right-10"
        onClick={handleToMain}
      >
        <Plus className="rotate-45" size={20} />
      </button>
      <div className="flex flex-col items-center gap-2 max-w-xl mx-auto pt-5">
     <img
  src={aboutbanner}
  alt="Asciiara About and FAQ section banner"
  loading="lazy"
  draggable="false"
  className="w-full h-auto max-h-[300px] object-cover  mb-8 select-none"
/>
        <article className=" leading-6 text-base text-slate-200 font-outfit pb-30 ">
          <header className="mb-2">
            <h1 className="text-2xl font-medium text-white relative right-1">What is Asciiara?</h1>
            <p className="text-lg leading-6 text-slate-300">
              <strong>Asciiara</strong> is a real-time text transformation and ASCII art generation
              tool built with <span className="font-semibold text-white">React</span>. It transforms
              plain text into stylized typography, visual illusions, and developer-ready output
              formats using a custom <em>transformer engine</em>.
            </p>
          </header>

          <section className="mb-2">
            <h2 className="text-2xl font-semibold text-white mb-2">Core Features</h2>
            <ul className="pl-3 list-disc marker:text-slate-400">
              <li>
                <strong>Live Editor:</strong> Real-time formatting updates on every keystroke.
              </li>
              <li>
                <strong>Test All Sandbox:</strong> Preview every available filter in a responsive
                card grid.
              </li>
              <li>
                <strong>One-Click Copy:</strong> Clipboard copy with toast feedback.
              </li>
              <li>
                <strong>Image Export:</strong> Export stylized blocks as high-quality PNGs using{' '}
                <code className="px-1 py-0.5 rounded bg-slate-800">html-to-image</code>.
              </li>
              <li>
                <strong>Native Sharing:</strong> Mobile-friendly sharing via the Web Share API.
              </li>
            </ul>
          </section>

          <section className="mb-2 space-y-2">
            <h2 className="text-2xl font-semibold text-white"> The Transformer Engine</h2>
            <p className="text-slate-300 leading-5">
              Powered by <code className="px-1 py-0.5 rounded bg-slate-800">transformers.js</code>,
              the engine uses character-mapping rules and wrapper templates to generate unique
              visual outputs.
            </p>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">1. Orientation &amp; Flow</h3>
                <ul className="space-y-1 pl-6 list-disc">
                  <li>
                    <strong>Reverse:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">abc → cba</code>
                  </li>
                  <li>
                    <strong>Flip Vertically:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">abc → ɔqɐ</code>
                  </li>
                  <li>
                    <strong>Spaced &amp; Vertical:</strong> Adds spacing or line breaks between
                    characters.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  2. Aesthetic &amp; Visual Illusions
                </h3>
                <ul className="space-y-1 pl-6 list-disc">
                  <li>
                    <strong>Chromostereopsis:</strong> High-contrast bracket wrapping for depth
                    illusions.
                  </li>
                  <li>
                    <strong>Sleek:</strong> <code className="bg-slate-800 px-1 rounded">a → α</code>
                    , <code className="bg-slate-800 px-1 rounded">b → в</code>
                  </li>
                  <li>
                    <strong>Leetspeak:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">a → 4</code>,{' '}
                    <code className="bg-slate-800 px-1 rounded">e → 3</code>
                  </li>
                  <li>
                    <strong>Decorative:</strong> Borders like{' '}
                    <code className="bg-slate-800 px-1 rounded">~^~ text ~^~</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">3. Developer Comment Filters</h3>
                <ul className="space-y-1 pl-6 list-disc">
                  <li>
                    <strong>Bash / Python:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded"># text</code>
                  </li>
                  <li>
                    <strong>C / CSS:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">/* text */</code>
                  </li>
                  <li>
                    <strong>C++ / JS:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">// text</code>
                  </li>
                  <li>
                    <strong>MySQL:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">-- text</code>
                  </li>
                  <li>
                    <strong>Visual Basic:</strong>{' '}
                    <code className="bg-slate-800 px-1 rounded">' text</code>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-1">
            <h2 className="text-2xl font-semibold text-white"> Tech Stack</h2>
            <ul className="space-y-1 pl-6 list-disc">
              <li>
                <strong>Frontend:</strong> React with{' '}
                <code className="bg-slate-800 px-1 rounded">useState</code> and{' '}
                <code className="bg-slate-800 px-1 rounded">useRef</code>
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS v4 with modern{' '}
                <code className="bg-slate-800 px-1 rounded">@theme</code>
              </li>
              <li>
                <strong>Icons:</strong> lucide-react
              </li>
              <li>
                <strong>Utilities:</strong> html-to-image
              </li>
            </ul>
          </section>
          <section className="pt-4 border-t border-slate-700/50 mt-6">
            <h2 className="text-xl font-semibold text-white mb-2">Roadmap & Updates</h2>
            <p className="text-slate-300 leading-6">
              Asciiara is continuously evolving. I push updates regularly, focusing on expanding the
              library of FIGlet fonts, adding wilder string transformers, and optimizing the mobile
              experience. If you have an idea for a filter or spot a bug, reach out!
            </p>
          </section>
          <section className="pt-4 mt-6 flex flex-col items-center justify-center">
            {socialLinks.map(item => {
              const IconComponent = item.icon;
              return (
                <ul className="flex items-center justify-center gap-3">
                  <li key={item.id}>
                    <a href={item.href} className="text-2xl hover:brightness-150">
                      {IconComponent}
                    </a>
                  </li>
                </ul>
              );
            })}

            <button
              onClick={handleToMain}
              className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-4 transition-all relative top-10  border-zinc-800 bg-zinc-950 text-zinc-200 cursor-pointer"
            >
              Done
            </button>
          </section>
       
        </article>
      </div>
    </div>
  );
}

