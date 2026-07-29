/**
 * WebMCP tools for AI agents visiting the portfolio.
 * Spec: https://webmachinelearning.github.io/webmcp/
 * Skill: registerTool on modelContext (document and/or navigator).
 */

const PROFILE = {
  name: 'Bruno Holanda',
  role: 'FullStack Web Developer',
  employer: 'RPE (rpe.tech)',
  stack: ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'AWS'],
  site: 'https://www.brunoholanda.com',
  about: 'https://www.brunoholanda.com/sobre',
  summary:
    'FullStack developer shipping production SAAS and freelance products. Former Bradesco administrative manager; career transition into tech.',
};

const PROJECTS = [
  {
    name: 'OffRoad-R',
    summary: 'Adventure marketplace (web + iOS + Android) for the U.S. market.',
    url: 'https://offroad-r.com/',
    portfolio: 'https://www.brunoholanda.com/projetos',
  },
  {
    name: 'PDF Studio',
    summary: 'Free in-browser PDF editor, compressor and signer.',
    url: 'https://pdf.brunoholanda.com/',
  },
  {
    name: 'Dev Tools',
    summary: 'Hub of generators and utilities for developers and QA.',
    url: 'https://tools.brunoholanda.com/',
  },
  {
    name: 'News Feed',
    summary: 'Customizable news dashboard with favorites and fullscreen.',
    url: 'https://tools.brunoholanda.com/newsfeed',
  },
  {
    name: 'Quiosque',
    summary: 'Campaign system for digital panels / EV charger screens.',
    url: 'https://quiosque.brunoholanda.com/',
  },
  {
    name: 'Código de Partida',
    summary: 'Programming course sales page and learning product.',
    url: 'https://curso.brunoholanda.com/',
  },
];

const CONTACT = {
  email: 'holanda_rodrigues@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/brunoholanda/',
  github: 'https://github.com/brunoholanda',
  whatsapp: 'https://wa.me/5583998150712',
  youtube: 'https://www.youtube.com/@NerdKing',
  contactPage: 'https://www.brunoholanda.com/contato',
  cvPt: 'https://drive.google.com/file/d/1-R9jxd51oo7prkAWmcfHh1bITrzq1pEZ/view',
  cvEn: 'https://drive.google.com/file/d/1KcMfJEVAf05Aiy9oYjDXeJpMgj9b59DG/view',
};

const ROUTES = {
  home: 'https://www.brunoholanda.com/',
  about: 'https://www.brunoholanda.com/sobre',
  timeline: 'https://www.brunoholanda.com/sobre/linha-do-tempo',
  projects: 'https://www.brunoholanda.com/projetos',
  skills: 'https://www.brunoholanda.com/habilidades',
  contact: 'https://www.brunoholanda.com/contato',
  hobbies: 'https://www.brunoholanda.com/hobbies',
  learn: 'https://www.brunoholanda.com/aprenda-programacao',
  llms: 'https://www.brunoholanda.com/llms.txt',
};

const TOOLS = [
  {
    name: 'get_profile',
    description:
      'Return Bruno Holanda profile summary: role, employer, stack, site URLs and short bio.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
    execute: async () => PROFILE,
  },
  {
    name: 'list_projects',
    description:
      'List featured live products and portfolio links for Bruno Holanda.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: {
          type: 'number',
          description: 'Optional max number of projects to return',
        },
      },
      additionalProperties: false,
    },
    execute: async ({ limit } = {}) => {
      const items =
        typeof limit === 'number' && limit > 0
          ? PROJECTS.slice(0, limit)
          : PROJECTS;
      return { count: items.length, projects: items };
    },
  },
  {
    name: 'get_contact',
    description:
      'Return official contact channels and CV download links for Bruno Holanda.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
    execute: async () => CONTACT,
  },
  {
    name: 'navigate_site',
    description:
      'Return canonical URLs for main portfolio sections. Optionally navigate the browser to a section.',
    inputSchema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
          description: `Section key: ${Object.keys(ROUTES).join(', ')}`,
          enum: Object.keys(ROUTES),
        },
        go: {
          type: 'boolean',
          description: 'If true, navigate the current browser tab to the section URL',
        },
      },
      additionalProperties: false,
    },
    execute: async ({ section, go } = {}) => {
      if (!section) {
        return { routes: ROUTES };
      }
      const url = ROUTES[section];
      if (!url) {
        return { error: `Unknown section: ${section}`, routes: ROUTES };
      }
      if (go && typeof window !== 'undefined') {
        window.location.assign(url);
      }
      return { section, url };
    },
  },
];

function getModelContexts() {
  const contexts = [];
  if (typeof document !== 'undefined' && document.modelContext) {
    contexts.push(document.modelContext);
  }
  if (typeof navigator !== 'undefined' && navigator.modelContext) {
    contexts.push(navigator.modelContext);
  }
  return contexts;
}

async function registerOnContext(ctx, tool) {
  if (!ctx) return false;

  if (typeof ctx.registerTool === 'function') {
    await ctx.registerTool(tool);
    return true;
  }

  // Older / alternate experimental surface mentioned by scanners
  if (typeof ctx.provideContext === 'function') {
    await ctx.provideContext({ tools: [tool] });
    return true;
  }

  return false;
}

/**
 * Registers portfolio WebMCP tools. Safe no-op when the API is unavailable.
 * @returns {() => void} cleanup / abort unregister helper
 */
export async function registerWebMcpTools() {
  const contexts = getModelContexts();
  if (!contexts.length) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  for (const tool of TOOLS) {
    if (signal.aborted) break;
    for (const ctx of contexts) {
      try {
        await registerOnContext(ctx, {
          ...tool,
          // Some implementations accept abort via options
        });
      } catch (err) {
        if (typeof console !== 'undefined' && console.debug) {
          console.debug('[webmcp] registerTool failed', tool.name, err);
        }
      }
    }
  }

  // Batch provideContext fallback for hosts that only accept one call
  for (const ctx of contexts) {
    if (typeof ctx.provideContext === 'function' && typeof ctx.registerTool !== 'function') {
      try {
        await ctx.provideContext({ tools: TOOLS });
      } catch (err) {
        if (typeof console !== 'undefined' && console.debug) {
          console.debug('[webmcp] provideContext failed', err);
        }
      }
    }
  }

  return () => {
    controller.abort();
    for (const ctx of contexts) {
      if (typeof ctx.unregisterTool !== 'function') continue;
      TOOLS.forEach((tool) => {
        try {
          ctx.unregisterTool(tool.name);
        } catch (_) {
          /* ignore */
        }
      });
    }
  };
}

export default registerWebMcpTools;
