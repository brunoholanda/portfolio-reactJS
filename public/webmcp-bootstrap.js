/**
 * Early WebMCP bootstrap (runs before React).
 * Detected on page load by agent-readiness scanners.
 */
(function () {
  'use strict';

  var PROFILE = {
    name: 'Bruno Holanda',
    role: 'FullStack Web Developer',
    employer: 'RPE (rpe.tech)',
    stack: ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'AWS'],
    site: 'https://www.brunoholanda.com',
    summary:
      'FullStack developer shipping production SAAS and freelance products. Former Bradesco manager; career transition into tech.',
  };

  var PROJECTS = [
    { name: 'OffRoad-R', url: 'https://offroad-r.com/', summary: 'Adventure marketplace web + iOS + Android' },
    { name: 'PDF Studio', url: 'https://pdf.brunoholanda.com/', summary: 'In-browser PDF editor' },
    { name: 'Dev Tools', url: 'https://tools.brunoholanda.com/', summary: 'Developer utilities hub' },
    { name: 'News Feed', url: 'https://tools.brunoholanda.com/newsfeed', summary: 'Custom news dashboard' },
    { name: 'Quiosque', url: 'https://quiosque.brunoholanda.com/', summary: 'Digital panel campaigns' },
    { name: 'Código de Partida', url: 'https://curso.brunoholanda.com/', summary: 'Programming course' },
  ];

  var CONTACT = {
    email: 'holanda_rodrigues@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/brunoholanda/',
    github: 'https://github.com/brunoholanda',
    whatsapp: 'https://wa.me/5583998150712',
    contactPage: 'https://www.brunoholanda.com/contato',
    cvPt: 'https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view',
    cvEn: 'https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view',
  };

  var ROUTES = {
    home: 'https://www.brunoholanda.com/',
    about: 'https://www.brunoholanda.com/sobre',
    projects: 'https://www.brunoholanda.com/projetos',
    skills: 'https://www.brunoholanda.com/habilidades',
    contact: 'https://www.brunoholanda.com/contato',
    llms: 'https://www.brunoholanda.com/llms.txt',
  };

  var TOOLS = [
    {
      name: 'get_profile',
      description: 'Return Bruno Holanda profile summary: role, employer, stack, and bio.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: function () {
        return Promise.resolve(PROFILE);
      },
    },
    {
      name: 'list_projects',
      description: 'List featured live products and portfolio links.',
      inputSchema: {
        type: 'object',
        properties: {
          limit: { type: 'number', description: 'Optional max number of projects' },
        },
        additionalProperties: false,
      },
      execute: function (input) {
        var limit = input && input.limit;
        var items = typeof limit === 'number' && limit > 0 ? PROJECTS.slice(0, limit) : PROJECTS;
        return Promise.resolve({ count: items.length, projects: items });
      },
    },
    {
      name: 'get_contact',
      description: 'Return official contact channels and CV links for Bruno Holanda.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      execute: function () {
        return Promise.resolve(CONTACT);
      },
    },
    {
      name: 'navigate_site',
      description: 'Return canonical portfolio section URLs; optionally navigate the tab.',
      inputSchema: {
        type: 'object',
        properties: {
          section: {
            type: 'string',
            enum: Object.keys(ROUTES),
            description: 'Section key to resolve',
          },
          go: { type: 'boolean', description: 'Navigate the browser to the section if true' },
        },
        additionalProperties: false,
      },
      execute: function (input) {
        input = input || {};
        if (!input.section) {
          return Promise.resolve({ routes: ROUTES });
        }
        var url = ROUTES[input.section];
        if (!url) {
          return Promise.resolve({ error: 'Unknown section', routes: ROUTES });
        }
        if (input.go) {
          window.location.assign(url);
        }
        return Promise.resolve({ section: input.section, url: url });
      },
    },
  ];

  function contexts() {
    var list = [];
    if (document.modelContext) list.push(document.modelContext);
    if (navigator.modelContext) list.push(navigator.modelContext);
    return list;
  }

  function registerAll() {
    var ctxs = contexts();
    if (!ctxs.length) return false;

    ctxs.forEach(function (ctx) {
      if (typeof ctx.registerTool === 'function') {
        TOOLS.forEach(function (tool) {
          try {
            var result = ctx.registerTool(tool);
            if (result && typeof result.then === 'function') {
              result.catch(function () {});
            }
          } catch (e) {}
        });
      } else if (typeof ctx.provideContext === 'function') {
        try {
          var provided = ctx.provideContext({ tools: TOOLS });
          if (provided && typeof provided.then === 'function') {
            provided.catch(function () {});
          }
        } catch (e) {}
      }
    });

    return true;
  }

  if (!registerAll()) {
    // API may appear after polyfill / extension injection
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (registerAll() || tries > 40) {
        clearInterval(timer);
      }
    }, 250);
  }
})();
