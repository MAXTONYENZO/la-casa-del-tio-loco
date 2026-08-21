globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-08-20T23:16:12.263Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/event-birthday-DVbcd1mK.jpg": {
		"type": "image/jpeg",
		"etag": "\"24476-sNOc3XvZ5lHGFH7VZvyUxqspqUQ\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 148598,
		"path": "../public/assets/event-birthday-DVbcd1mK.jpg"
	},
	"/assets/event-corporate-BssYwjko.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c980-FsSrceqknFkTSbrn7snrbUDWOY0\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 182656,
		"path": "../public/assets/event-corporate-BssYwjko.jpg"
	},
	"/assets/event-wedding-CeUXj1hd.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c7e6-orzuxKo+FWjhjlMRhFUNrFYWRcQ\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 182246,
		"path": "../public/assets/event-wedding-CeUXj1hd.jpg"
	},
	"/assets/event-quince-BsF44rhr.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e79e-OBYYfl0Dz1rpKcbcBuo/zHPEVDQ\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 190366,
		"path": "../public/assets/event-quince-BsF44rhr.jpg"
	},
	"/assets/mansion-chapel-BbmHBErF.jpg": {
		"type": "image/jpeg",
		"etag": "\"16e0d-Ek/nYApJ/etFONvFDm+GibDAn+k\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 93709,
		"path": "../public/assets/mansion-chapel-BbmHBErF.jpg"
	},
	"/assets/hero-mansion-DmkpcTo0.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ab99-ZjEQd/ztT7ypoJs81Rpt3Dr+67I\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 240537,
		"path": "../public/assets/hero-mansion-DmkpcTo0.jpg"
	},
	"/assets/mansion-gardens-0QM4Z6Q6.jpg": {
		"type": "image/jpeg",
		"etag": "\"35b8b-2zXD8e/8xkq3v55eCVA4/RfgHbk\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 220043,
		"path": "../public/assets/mansion-gardens-0QM4Z6Q6.jpg"
	},
	"/assets/mansion-interior-BNQI6Nw2.jpg": {
		"type": "image/jpeg",
		"etag": "\"350e8-XRGhmH4fGe90EIAyeAOXDd8VpeY\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 217320,
		"path": "../public/assets/mansion-interior-BNQI6Nw2.jpg"
	},
	"/assets/styles-Ck_xAllh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14df0-84fzDfA0B2ph/ShSa2+cgbjsqqk\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 85488,
		"path": "../public/assets/styles-Ck_xAllh.css"
	},
	"/assets/routes-BKKhtD3F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3eec6-ORHhg8OoEgV2PyKeGCk6Ztd9Srs\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 257734,
		"path": "../public/assets/routes-BKKhtD3F.js"
	},
	"/assets/index-DHrrMKVk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"533a0-xTabGsS6/NMBlxwzvh6P8Ve4pm4\"",
		"mtime": "2026-08-21T00:59:53.238Z",
		"size": 340896,
		"path": "../public/assets/index-DHrrMKVk.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_b5sKGf = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_b5sKGf
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
