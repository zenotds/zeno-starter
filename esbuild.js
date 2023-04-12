import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

async function build() {
    await esbuild.build({
        logLevel: 'debug',
        entryPoints:
        {
            'js/scripts.min': './js/scripts.js',
            'css/styles.min': './sass/styles.scss',
            'css/print.min': './sass/print.scss'
        },
        outdir: 'assets',
        bundle: true,
        sourcemap: true,
        external: ['*.woff', '*.woff2', '*.ttf', '*.eot?#iefix'],
        minify: true,
        plugins: [
            sassPlugin(),
        ],
    });
}

build()
    .then(() => console.log('⚡ Styles & Scripts Compiled! ⚡ '))
    .catch(() => process.exit(1));