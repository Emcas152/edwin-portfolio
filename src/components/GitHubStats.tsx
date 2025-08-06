import React, { useState } from 'react';

interface GitHubStatsProps {
  username: string;
}

interface StatImageProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
}

const StatImage = ({ src, alt, fallbackText, className = "" }: StatImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`}>
        <div className="text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <p className="text-sm">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
          <div className="text-gray-500 text-sm">Cargando...</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-lg transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
};

export const GitHubStats = ({ username }: GitHubStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">GitHub Stats</h4>
        <StatImage
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&cache_seconds=86400`}
          alt="GitHub Stats"
          fallbackText="Estadísticas no disponibles en este momento"
        />
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Lenguajes Más Usados</h4>
        <StatImage
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default&hide_border=true&cache_seconds=86400`}
          alt="Top Languages"
          fallbackText="Información de lenguajes no disponible"
        />
      </div>
      
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Contribuciones</h4>
        <StatImage
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true&cache_seconds=86400`}
          alt="GitHub Streak"
          fallbackText="Datos de contribuciones no disponibles"
        />
      </div>
      
      {/* Información adicional manual como fallback */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg mt-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Actividad en GitHub</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-teal-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-teal-600">20+</div>
            <div className="text-sm text-gray-600">Repositorios Públicos</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">7+</div>
            <div className="text-sm text-gray-600">Años de Experiencia</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">10+</div>
            <div className="text-sm text-gray-600">Tecnologías Dominadas</div>
          </div>
        </div>
      </div>
    </div>
  );
};
