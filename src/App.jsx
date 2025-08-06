// Edwin Castillo - Full Stack Developer Portfolio
// React + Vite + Tailwind + GitHub API

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { GitHubStats } from "./components/GitHubStats";

// Componente Avatar con fallback
const Avatar = ({ username, name, size = 160 }) => {
  const [imgSrc, setImgSrc] = useState(`https://github.com/${username}.png?size=${size}`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Intentar con la URL alternativa de GitHub
      setImgSrc(`https://avatars.githubusercontent.com/${username}?size=${size}`);
    } else {
      // Si ambas fallan, usar placeholder
      setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=0d9488&color=fff&bold=true`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={name}
      className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-xl"
      onError={handleError}
    />
  );
};

/**
 * @typedef {Object} Repository
 * @property {number} id
 * @property {string} name
 * @property {string|null} description
 * @property {string} html_url
 * @property {number} stargazers_count
 * @property {number} forks_count
 * @property {string|null} language
 * @property {string} updated_at
 * @property {string[]} topics
 */

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleRepos, setVisibleRepos] = useState(6);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/Emcas152/repos?sort=updated&per_page=50")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.name.includes('fork'))
          .sort((a, b) => {
            const scoreA = a.stargazers_count * 2 + (new Date(a.updated_at).getTime() / 1000000000);
            const scoreB = b.stargazers_count * 2 + (new Date(b.updated_at).getTime() / 1000000000);
            return scoreB - scoreA;
          });
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const loadMoreRepos = () => {
    setVisibleRepos(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Edwin Castillo</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">Sobre mí</a>
              <a href="#projects" className="text-gray-600 hover:text-teal-600 transition-colors">Proyectos</a>
              <a href="#skills" className="text-gray-600 hover:text-teal-600 transition-colors">Habilidades</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <Avatar username="Emcas152" name="Edwin Castillo" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Edwin Castillo
            </h1>
            <h2 className="text-2xl md:text-3xl text-teal-600 mb-6 font-medium">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
              Especializado en desarrollo web full-stack y aplicaciones móviles.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://github.com/Emcas152" 
                target="_blank"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <span>👨‍💻</span> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/edwin-castillo-90132250" 
                target="_blank"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <span>💼</span> LinkedIn
              </a>
              <a 
                href="mailto:edwincas1522@hotmail.com"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                <span>📧</span> Email
              </a>
              <a 
                href="https://wa.me/50237558713"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <span>📱</span> WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 space-y-20">
          {/* About Me */}
          <section id="about" className="py-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre Mí</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Soy un desarrollador full-stack con experiencia en la construcción de aplicaciones web escalables 
                  y soluciones tecnológicas innovadoras. Me apasiona aprender nuevas tecnologías y resolver 
                  problemas complejos.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mi experiencia abarca desde el desarrollo frontend con React y Vue.js hasta el backend con 
                  PHP, Laravel, Node.js y desarrollo móvil con Flutter.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">🎯 Problem Solver</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">🚀 Tech Enthusiast</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">📚 Continuous Learner</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Experiencia</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-600">+7 años en desarrollo web</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Múltiples proyectos completados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Desarrollo full-stack</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* GitHub Stats */}
            <GitHubStats username="Emcas152" />
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">Mis Proyectos</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Una selección de mis repositorios más destacados en GitHub, mostrando diferentes tecnologías y enfoques.
            </p>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {repos.slice(0, visibleRepos).map((repo) => (
                    <Card key={repo.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xl font-semibold text-gray-800 line-clamp-2">{repo.name.replace(/-/g, ' ')}</h4>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <span>⭐</span>
                            <span className="text-sm text-gray-600">{repo.stargazers_count}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {repo.description || "Proyecto desarrollado con tecnologías modernas."}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {repo.language && (
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                              {repo.language}
                            </span>
                          )}
                          {repo.topics?.slice(0, 2).map((topic) => (
                            <span key={topic} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              🍴 {repo.forks_count}
                            </span>
                            <span>
                              📅 {new Date(repo.updated_at).toLocaleDateString('es-ES')}
                            </span>
                          </div>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                          >
                            Ver Código
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {visibleRepos < repos.length && (
                  <div className="text-center">
                    <Button
                      onClick={loadMoreRepos}
                      className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Ver Más Proyectos ({repos.length - visibleRepos} restantes)
                    </Button>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Skills */}
          <section id="skills" className="py-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Habilidades Técnicas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                  <span>🎨</span> Frontend
                </h4>
                <div className="space-y-3">
                  {['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                  <span>⚙️</span> Backend
                </h4>
                <div className="space-y-3">
                  {['PHP', 'Laravel', 'Node.js', 'C#', 'C++', 'MySQL'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                  <span>📱</span> Mobile & Tools
                </h4>
                <div className="space-y-3">
                  {['Flutter', 'Git', 'Docker', 'VS Code', 'Postman', 'Figma'].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">¡Conectemos!</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en contactarme.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-6 text-gray-800">Información de Contacto</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:edwincas1522@hotmail.com" className="text-teal-600 hover:underline">
                        edwincas1522@hotmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/50237558713" className="text-teal-600 hover:underline">
                        +502 3755 8713
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="font-medium text-gray-800">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/edwin-castillo-90132250" target="_blank" className="text-teal-600 hover:underline">
                        edwin-castillo-90132250
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <Input placeholder="Tu nombre completo" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="tu@email.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-300 mb-4">
              © 2025 Edwin Castillo. Hecho con ❤️ usando React + Vite + Tailwind CSS
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Emcas152" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/edwin-castillo-90132250" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="mailto:edwincas1522@hotmail.com" className="text-gray-300 hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
