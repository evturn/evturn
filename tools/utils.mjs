import path from 'path';

const matchOperatorRe = /[|\\{}()[\]^$+*?.]/g;
const escapeStringRegexp = str => {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string.');
	}
	return str.replace(matchOperatorRe, '\\$&');
};

class InterpolateHTMLPlugin {
  constructor(replacements) {
    this.replacements = replacements;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InterpolateHTMLPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'InterpolateHTMLPlugin',
        data => {
          Object.keys(this.replacements).forEach(key => {
            const value = this.replacements[key];
            data.html = data.html.replace(
              new RegExp('%' + escapeStringRegexp(key) + '%', 'g'),
              value
            );
          });
        }
      );
    });
  }
}

const pathTo = (...args) => path.resolve(process.cwd(), ...args);

export {
  InterpolateHTMLPlugin,
  pathTo,
};
