import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Blog = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish ? 'Blog' : 'Blog'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Articles and insights about site management' 
            : 'Site yönetimi hakkında makaleler ve içgörüler'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-surface dark:bg-surface-dark rounded-2xl shadow-soft border border-border dark:border-dark-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl">📄</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-text-light dark:text-text-dark-light mb-2">
                  {isEnglish ? 'Posted on' : 'Yayınlanma'} {new Date().toLocaleDateString()}
                </div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">
                  {isEnglish ? `Blog Post ${post}` : `Blog Yazısı ${post}`}
                </h3>
                <p className="text-text-light dark:text-text-dark-light text-sm">
                  {isEnglish 
                    ? 'Short description of the blog post...' 
                    : 'Blog yazısının kısa açıklaması...'}
                </p>
                <button className="mt-4 text-secondary font-medium hover:text-secondary-dark transition-colors text-sm">
                  {isEnglish ? 'Read More →' : 'Devamını Oku →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
