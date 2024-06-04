import { Icon } from './types/Icon';

const iconsets = ['teticons-dark', 'teticons-light'];

const generateIcons = (theme: (typeof iconsets)[number]): Icon => {
  const icon = (name: string): Icon => ({
    [`_f_${name}`]: {
      iconPath: `../icons/${theme}/${name}.svg`,
    },
  });

  const iconGeneric = (name: string): Icon => ({
    [`_${name}`]: {
      iconPath: `../icons/${theme}/${name}.svg`,
    },
  });

  const folderIcon = (name: string): Icon => ({
    [`_fd_${name}`]: {
      iconPath: `../icons/${theme}/${name}.svg`,
    },
  });

  return {
    ...iconGeneric('file'),
    ...iconGeneric('folder_open'),
    ...iconGeneric('folder'),
    ...folderIcon('folder_admin_open'),
    ...folderIcon('folder_admin'),
    ...folderIcon('folder_android_open'),
    ...folderIcon('folder_android'),
    ...folderIcon('folder_angular_open'),
    ...folderIcon('folder_angular'),
    ...folderIcon('folder_animation_open'),
    ...folderIcon('folder_animation'),
    ...folderIcon('folder_ansible_open'),
    ...folderIcon('folder_ansible'),
    ...folderIcon('folder_api_open'),
    ...folderIcon('folder_api'),
    ...folderIcon('folder_apollo_open'),
    ...folderIcon('folder_apollo'),
    ...folderIcon('folder_app_open'),
    ...folderIcon('folder_app'),
    ...folderIcon('folder_archive_open'),
    ...folderIcon('folder_archive'),
    ...folderIcon('folder_asset_open'),
    ...folderIcon('folder_asset'),
    ...folderIcon('folder_audio_open'),
    ...folderIcon('folder_audio'),
    ...folderIcon('folder_aurelia_open'),
    ...folderIcon('folder_aurelia'),
    ...folderIcon('folder_aws_open'),
    ...folderIcon('folder_aws'),
    ...folderIcon('folder_azure_open'),
    ...folderIcon('folder_azure'),
    ...folderIcon('folder_base_open'),
    ...folderIcon('folder_base'),
    ...folderIcon('folder_batch_open'),
    ...folderIcon('folder_batch'),
    ...folderIcon('folder_benchmark_open'),
    ...folderIcon('folder_benchmark'),
    ...folderIcon('folder_bower_open'),
    ...folderIcon('folder_bower'),
    ...folderIcon('folder_cart_open'),
    ...folderIcon('folder_cart'),
    ...folderIcon('folder_changesets_open'),
    ...folderIcon('folder_changesets'),
    ...folderIcon('folder_ci_open'),
    ...folderIcon('folder_ci'),
    ...folderIcon('folder_circleci_open'),
    ...folderIcon('folder_circleci'),
    ...folderIcon('folder_client_open'),
    ...folderIcon('folder_client'),
    ...folderIcon('folder_cluster_open'),
    ...folderIcon('folder_cluster'),
    ...folderIcon('folder_cmake_open'),
    ...folderIcon('folder_cmake'),
    ...folderIcon('folder_cobol_open'),
    ...folderIcon('folder_cobol'),
    ...folderIcon('folder_command_open'),
    ...folderIcon('folder_command'),
    ...folderIcon('folder_component_open'),
    ...folderIcon('folder_component'),
    ...folderIcon('folder_config_open'),
    ...folderIcon('folder_config'),
    ...folderIcon('folder_constant_open'),
    ...folderIcon('folder_constant'),
    ...folderIcon('folder_container_open'),
    ...folderIcon('folder_container'),
    ...folderIcon('folder_content_open'),
    ...folderIcon('folder_content'),
    ...folderIcon('folder_context_open'),
    ...folderIcon('folder_context'),
    ...folderIcon('folder_contract_open'),
    ...folderIcon('folder_contract'),
    ...folderIcon('folder_controller_open'),
    ...folderIcon('folder_controller'),
    ...folderIcon('folder_core_open'),
    ...folderIcon('folder_core'),
    ...folderIcon('folder_coverage_open'),
    ...folderIcon('folder_coverage'),
    ...folderIcon('folder_css_open'),
    ...folderIcon('folder_css'),
    ...folderIcon('folder_custom_open'),
    ...folderIcon('folder_custom'),
    ...folderIcon('folder_cypress_open'),
    ...folderIcon('folder_cypress'),
    ...folderIcon('folder_database_open'),
    ...folderIcon('folder_database'),
    ...folderIcon('folder_debug_open'),
    ...folderIcon('folder_debug'),
    ...folderIcon('folder_decorators_open'),
    ...folderIcon('folder_decorators'),
    ...folderIcon('folder_delta_open'),
    ...folderIcon('folder_delta'),
    ...folderIcon('folder_directives_open'),
    ...folderIcon('folder_directives'),
    ...folderIcon('folder_dist_open'),
    ...folderIcon('folder_dist'),
    ...folderIcon('folder_docker_open'),
    ...folderIcon('folder_docker'),
    ...folderIcon('folder_docs_open'),
    ...folderIcon('folder_docs'),
    ...folderIcon('folder_download_open'),
    ...folderIcon('folder_download'),
    ...folderIcon('folder_dump_open'),
    ...folderIcon('folder_dump'),
    ...folderIcon('folder_elixir_open'),
    ...folderIcon('folder_elixir'),
    ...folderIcon('folder_environment_open'),
    ...folderIcon('folder_environment'),
    ...folderIcon('folder_error_open'),
    ...folderIcon('folder_error'),
    ...folderIcon('folder_event_open'),
    ...folderIcon('folder_event'),
    ...folderIcon('folder_examples_open'),
    ...folderIcon('folder_examples'),
    ...folderIcon('folder_expo_open'),
    ...folderIcon('folder_expo'),
    ...folderIcon('folder_export_open'),
    ...folderIcon('folder_export'),
    ...folderIcon('folder_fastlane_open'),
    ...folderIcon('folder_fastlane'),
    ...folderIcon('folder_firebase_open'),
    ...folderIcon('folder_firebase'),
    ...folderIcon('folder_flow_open'),
    ...folderIcon('folder_flow'),
    ...folderIcon('folder_fonts_open'),
    ...folderIcon('folder_fonts'),
    ...folderIcon('folder_functions_open'),
    ...folderIcon('folder_functions'),
    ...folderIcon('folder_generator_open'),
    ...folderIcon('folder_generator'),
    ...folderIcon('folder_git_open'),
    ...folderIcon('folder_git'),
    ...folderIcon('folder_github_open'),
    ...folderIcon('folder_github'),
    ...folderIcon('folder_gitlab_open'),
    ...folderIcon('folder_gitlab'),
    ...folderIcon('folder_global_open'),
    ...folderIcon('folder_global'),
    ...folderIcon('folder_gradle_open'),
    ...folderIcon('folder_gradle'),
    ...folderIcon('folder_graphql_open'),
    ...folderIcon('folder_graphql'),
    ...folderIcon('folder_guard_open'),
    ...folderIcon('folder_guard'),
    ...folderIcon('folder_gulp_open'),
    ...folderIcon('folder_gulp'),
    ...folderIcon('folder_helper_open'),
    ...folderIcon('folder_helper'),
    ...folderIcon('folder_home_open'),
    ...folderIcon('folder_home'),
    ...folderIcon('folder_hook_open'),
    ...folderIcon('folder_hook'),
    ...folderIcon('folder_husky_open'),
    ...folderIcon('folder_husky'),
    ...folderIcon('folder_i18n_open'),
    ...folderIcon('folder_i18n'),
    ...folderIcon('folder_images_open'),
    ...folderIcon('folder_images'),
    ...folderIcon('folder_import_open'),
    ...folderIcon('folder_import'),
    ...folderIcon('folder_include_open'),
    ...folderIcon('folder_include'),
    ...folderIcon('folder_intellij_open'),
    ...folderIcon('folder_intellij'),
    ...folderIcon('folder_interface_open'),
    ...folderIcon('folder_interface'),
    ...folderIcon('folder_ios_open'),
    ...folderIcon('folder_ios'),
    ...folderIcon('folder_javascript_open'),
    ...folderIcon('folder_javascript'),
    ...folderIcon('folder_jinja_open'),
    ...folderIcon('folder_jinja'),
    ...folderIcon('folder_job_open'),
    ...folderIcon('folder_job'),
    ...folderIcon('folder_json_open'),
    ...folderIcon('folder_json'),
    ...folderIcon('folder_jwt_open'),
    ...folderIcon('folder_jwt'),
    ...folderIcon('folder_keys_open'),
    ...folderIcon('folder_keys'),
    ...folderIcon('folder_kubernetes_open'),
    ...folderIcon('folder_kubernetes'),
    ...folderIcon('folder_layout_open'),
    ...folderIcon('folder_layout'),
    ...folderIcon('folder_less_open'),
    ...folderIcon('folder_less'),
    ...folderIcon('folder_library_open'),
    ...folderIcon('folder_library'),
    ...folderIcon('folder_log_open'),
    ...folderIcon('folder_log'),
    ...folderIcon('folder_lottie_open'),
    ...folderIcon('folder_lottie'),
    ...folderIcon('folder_lua_open'),
    ...folderIcon('folder_lua'),
    ...folderIcon('folder_mail_open'),
    ...folderIcon('folder_mail'),
    ...folderIcon('folder_mappings_open'),
    ...folderIcon('folder_mappings'),
    ...folderIcon('folder_markdown_open'),
    ...folderIcon('folder_markdown'),
    ...folderIcon('folder_messages_open'),
    ...folderIcon('folder_messages'),
    ...folderIcon('folder_meta_open'),
    ...folderIcon('folder_meta'),
    ...folderIcon('folder_middleware_open'),
    ...folderIcon('folder_middleware'),
    ...folderIcon('folder_migration_open'),
    ...folderIcon('folder_migration'),
    ...folderIcon('folder_mjml_open'),
    ...folderIcon('folder_mjml'),
    ...folderIcon('folder_mobile_open'),
    ...folderIcon('folder_mobile'),
    ...folderIcon('folder_mock_open'),
    ...folderIcon('folder_mock'),
    ...folderIcon('folder_modal_open'),
    ...folderIcon('folder_modal'),
    ...folderIcon('folder_model_open'),
    ...folderIcon('folder_model'),
    ...folderIcon('folder_moon_open'),
    ...folderIcon('folder_moon'),
    ...folderIcon('folder_next_open'),
    ...folderIcon('folder_next'),
    ...folderIcon('folder_node_open'),
    ...folderIcon('folder_node'),
    ...folderIcon('folder_nuxt_open'),
    ...folderIcon('folder_nuxt'),
    ...folderIcon('folder_nx_open'),
    ...folderIcon('folder_nx'),
    ...folderIcon('folder_other_open'),
    ...folderIcon('folder_other'),
    ...folderIcon('folder_package_open'),
    ...folderIcon('folder_package'),
    ...folderIcon('folder_php_open'),
    ...folderIcon('folder_php'),
    ...folderIcon('folder_phpmailer_open'),
    ...folderIcon('folder_phpmailer'),
    ...folderIcon('folder_pinia_store_open'),
    ...folderIcon('folder_pinia_store'),
    ...folderIcon('folder_pipe_open'),
    ...folderIcon('folder_pipe'),
    ...folderIcon('folder_playwright_open'),
    ...folderIcon('folder_playwright'),
    ...folderIcon('folder_plugin_open'),
    ...folderIcon('folder_plugin'),
    ...folderIcon('folder_prisma_open'),
    ...folderIcon('folder_prisma'),
    ...folderIcon('folder_private_open'),
    ...folderIcon('folder_private'),
    ...folderIcon('folder_project_open'),
    ...folderIcon('folder_project'),
    ...folderIcon('folder_public_open'),
    ...folderIcon('folder_public'),
    ...folderIcon('folder_python_open'),
    ...folderIcon('folder_python'),
    ...folderIcon('folder_quasar_open'),
    ...folderIcon('folder_quasar'),
    ...folderIcon('folder_query_open'),
    ...folderIcon('folder_query'),
    ...folderIcon('folder_queue_open'),
    ...folderIcon('folder_queue'),
    ...folderIcon('folder_red_hat_open'),
    ...folderIcon('folder_red_hat'),
    ...folderIcon('folder_repository_open'),
    ...folderIcon('folder_repository'),
    ...folderIcon('folder_review_open'),
    ...folderIcon('folder_review'),
    ...folderIcon('folder_robot_open'),
    ...folderIcon('folder_robot'),
    ...folderIcon('folder_route_open'),
    ...folderIcon('folder_route'),
    ...folderIcon('folder_rules_open'),
    ...folderIcon('folder_rules'),
    ...folderIcon('folder_rust_open'),
    ...folderIcon('folder_rust'),
    ...folderIcon('folder_sass_open'),
    ...folderIcon('folder_sass'),
    ...folderIcon('folder_scala_open'),
    ...folderIcon('folder_scala'),
    ...folderIcon('folder_script_open'),
    ...folderIcon('folder_script'),
    ...folderIcon('folder_secure_open'),
    ...folderIcon('folder_secure'),
    ...folderIcon('folder_server_open'),
    ...folderIcon('folder_server'),
    ...folderIcon('folder_serverless_open'),
    ...folderIcon('folder_serverless'),
    ...folderIcon('folder_shared_open'),
    ...folderIcon('folder_shared'),
    ...folderIcon('folder_src_open'),
    ...folderIcon('folder_src'),
    ...folderIcon('folder_stack_open'),
    ...folderIcon('folder_stack'),
    ...folderIcon('folder_stencil_open'),
    ...folderIcon('folder_stencil'),
    ...folderIcon('folder_storage_open'),
    ...folderIcon('folder_storage'),
    ...folderIcon('folder_storybook_open'),
    ...folderIcon('folder_storybook'),
    ...folderIcon('folder_stylus_open'),
    ...folderIcon('folder_stylus'),
    ...folderIcon('folder_sublime_open'),
    ...folderIcon('folder_sublime'),
    ...folderIcon('folder_svelte_open'),
    ...folderIcon('folder_svelte'),
    ...folderIcon('folder_svg_open'),
    ...folderIcon('folder_svg'),
    ...folderIcon('folder_syntax_open'),
    ...folderIcon('folder_syntax'),
    ...folderIcon('folder_tasks_open'),
    ...folderIcon('folder_tasks'),
    ...folderIcon('folder_tauri_open'),
    ...folderIcon('folder_tauri'),
    ...folderIcon('folder_temp_open'),
    ...folderIcon('folder_temp'),
    ...folderIcon('folder_template_open'),
    ...folderIcon('folder_template'),
    ...folderIcon('folder_terraform_open'),
    ...folderIcon('folder_terraform'),
    ...folderIcon('folder_test_open'),
    ...folderIcon('folder_test'),
    ...folderIcon('folder_theme_open'),
    ...folderIcon('folder_theme'),
    ...folderIcon('folder_tools_open'),
    ...folderIcon('folder_tools'),
    ...folderIcon('folder_typescript_open'),
    ...folderIcon('folder_typescript'),
    ...folderIcon('folder_update_open'),
    ...folderIcon('folder_update'),
    ...folderIcon('folder_upload_open'),
    ...folderIcon('folder_upload'),
    ...folderIcon('folder_utils_open'),
    ...folderIcon('folder_utils'),
    ...folderIcon('folder_video_open'),
    ...folderIcon('folder_video'),
    ...folderIcon('folder_view_open'),
    ...folderIcon('folder_view'),
    ...folderIcon('folder_vm_open'),
    ...folderIcon('folder_vm'),
    ...folderIcon('folder_vscode_open'),
    ...folderIcon('folder_vscode'),
    ...folderIcon('folder_vuepress_open'),
    ...folderIcon('folder_vuepress'),
    ...folderIcon('folder_wakatime_open'),
    ...folderIcon('folder_wakatime'),
    ...folderIcon('folder_webpack_open'),
    ...folderIcon('folder_webpack'),
    ...folderIcon('folder_wordpress_open'),
    ...folderIcon('folder_wordpress'),
    ...icon('3d'),
    ...icon('abc'),
    ...icon('actionscript'),
    ...icon('ada'),
    ...icon('adonis'),
    ...icon('advpl_include'),
    ...icon('advpl_prw'),
    ...icon('advpl_ptm'),
    ...icon('advpl_tlpp'),
    ...icon('ai'),
    ...icon('android'),
    ...icon('angular-component'),
    ...icon('angular-directive'),
    ...icon('angular-guard'),
    ...icon('angular-pipe'),
    ...icon('angular-resolver'),
    ...icon('angular-service'),
    ...icon('angular'),
    ...icon('ansible'),
    ...icon('apiblueprint'),
    ...icon('apollo'),
    ...icon('applescript'),
    ...icon('apps-script'),
    ...icon('appveyor'),
    ...icon('arduino'),
    ...icon('asciidoc'),
    ...icon('assembly'),
    ...icon('astro'),
    ...icon('astyle'),
    ...icon('audio'),
    ...icon('aurelia'),
    ...icon('authors'),
    ...icon('auto'),
    ...icon('autohotkey'),
    ...icon('autoit'),
    ...icon('avi'),
    ...icon('azure-pipelines'),
    ...icon('azure'),
    ...icon('babel'),
    ...icon('ballerina'),
    ...icon('bat'),
    ...icon('bazel'),
    ...icon('bicep'),
    ...icon('bitbucket'),
    ...icon('bithound'),
    ...icon('blade'),
    ...icon('blink'),
    ...icon('blitz'),
    ...icon('bower'),
    ...icon('brainfuck'),
    ...icon('browserslist'),
    ...icon('bsconfig'),
    ...icon('buck'),
    ...icon('bucklescript'),
    ...icon('buildkite'),
    ...icon('bun'),
    ...icon('bundler'),
    ...icon('c'),
    ...icon('cabal'),
    ...icon('cake'),
    ...icon('capacitor'),
    ...icon('certificate'),
    ...icon('changelog'),
    ...icon('chess'),
    ...icon('circleci'),
    ...icon('clojure'),
    ...icon('cloudfoundry'),
    ...icon('cmake'),
    ...icon('coala'),
    ...icon('cobol'),
    ...icon('coconut'),
    ...icon('code-climate'),
    ...icon('codecov'),
    ...icon('codeowners'),
    ...icon('coffee'),
    ...icon('coldfusion'),
    ...icon('command'),
    ...icon('commitizen'),
    ...icon('commitlint'),
    ...icon('compodoc'),
    ...icon('composer'),
    ...icon('console'),
    ...icon('contributing'),
    ...icon('cpp'),
    ...icon('credits'),
    ...icon('crystal'),
    ...icon('csharp'),
    ...icon('css'),
    ...icon('cssmap'),
    ...icon('csv'),
    ...icon('cucumber'),
    ...icon('cuda'),
    ...icon('cypress'),
    ...icon('d'),
    ...icon('dart'),
    ...icon('database'),
    ...icon('denizenscript'),
    ...icon('deno'),
    ...icon('dependabot'),
    ...icon('dhall'),
    ...icon('dinophp'),
    ...icon('disc'),
    ...icon('django'),
    ...icon('docker'),
    ...icon('dotjs'),
    ...icon('drawio'),
    ...icon('drone'),
    ...icon('dune'),
    ...icon('edge'),
    ...icon('editorconfig'),
    ...icon('ejs'),
    ...icon('elixir'),
    ...icon('elm'),
    ...icon('email'),
    ...icon('ember'),
    ...icon('env'),
    ...icon('erlang'),
    ...icon('error'),
    ...icon('eslint'),
    ...icon('exe'),
    ...icon('fastlane'),
    ...icon('favicon'),
    ...icon('figma'),
    ...icon('firebase'),
    ...icon('flash'),
    ...icon('flow'),
    ...icon('font'),
    ...icon('forth'),
    ...icon('fortran'),
    ...icon('foxpro'),
    ...icon('fsharp'),
    ...icon('fusebox'),
    ...icon('gatsby'),
    ...icon('gcp'),
    ...icon('gemfile'),
    ...icon('gemini'),
    ...icon('git'),
    ...icon('gitpod'),
    ...icon('go-mod'),
    ...icon('go'),
    ...icon('godot-assets'),
    ...icon('godot'),
    ...icon('gradle'),
    ...icon('grain'),
    ...icon('graphcool'),
    ...icon('graphql'),
    ...icon('gridsome'),
    ...icon('groovy'),
    ...icon('grunt'),
    ...icon('gulp'),
    ...icon('h'),
    ...icon('hack'),
    ...icon('haml'),
    ...icon('handlebars'),
    ...icon('haskell'),
    ...icon('haxe'),
    ...icon('hcl'),
    ...icon('helm'),
    ...icon('heroku'),
    ...icon('hex'),
    ...icon('horusec'),
    ...icon('hpp'),
    ...icon('html'),
    ...icon('http'),
    ...icon('husky'),
    ...icon('hygen'),
    ...icon('i18n'),
    ...icon('idris'),
    ...icon('image'),
    ...icon('imba'),
    ...icon('ionic'),
    ...icon('istanbul'),
    ...icon('jar'),
    ...icon('java'),
    ...icon('javaclass'),
    ...icon('jenkins'),
    ...icon('jenkins'),
    ...icon('jest'),
    ...icon('jinja'),
    ...icon('js'),
    ...icon('jsconfig'),
    ...icon('jsmap'),
    ...icon('json'),
    ...icon('jsp'),
    ...icon('julia'),
    ...icon('jupyter'),
    ...icon('karma'),
    ...icon('key'),
    ...icon('kivy'),
    ...icon('kl'),
    ...icon('kotlin'),
    ...icon('kusto'),
    ...icon('lerna'),
    ...icon('less'),
    ...icon('lib'),
    ...icon('lighthouse'),
    ...icon('lilypond'),
    ...icon('liquid'),
    ...icon('lisp'),
    ...icon('livescript'),
    ...icon('llvm'),
    ...icon('lock'),
    ...icon('log'),
    ...icon('lolcode'),
    ...icon('lua'),
    ...icon('makefile'),
    ...icon('markdown'),
    ...icon('markojs'),
    ...icon('mathematica'),
    ...icon('matlab'),
    ...icon('maven'),
    ...icon('mdsvex'),
    ...icon('mdx'),
    ...icon('merlin'),
    ...icon('meson'),
    ...icon('minecraft'),
    ...icon('mint'),
    ...icon('mjml'),
    ...icon('mocha'),
    ...icon('modernizr'),
    ...icon('moon'),
    ...icon('moonscript'),
    ...icon('mxml'),
    ...icon('ndst'),
    ...icon('nestjs'),
    ...icon('netlify'),
    ...icon('next'),
    ...icon('nginx'),
    ...icon('nim'),
    ...icon('nix'),
    ...icon('nodejs'),
    ...icon('nodemon'),
    ...icon('npm'),
    ...icon('nrwl'),
    ...icon('nuget'),
    ...icon('nuxt'),
    ...icon('nx'),
    ...icon('ocaml'),
    ...icon('odin'),
    ...icon('opa'),
    ...icon('opam'),
    ...icon('opengl'),
    ...icon('pawn'),
    ...icon('pdf'),
    ...icon('percy'),
    ...icon('perl'),
    ...icon('photoshop'),
    ...icon('php-cs-fixer'),
    ...icon('php'),
    ...icon('phpunit'),
    ...icon('pipeline'),
    ...icon('playwright'),
    ...icon('pnpm'),
    ...icon('postcssconfig'),
    ...icon('posthtml'),
    ...icon('powerpoint'),
    ...icon('powershell'),
    ...icon('prettier'),
    ...icon('prisma'),
    ...icon('processing'),
    ...icon('prolog'),
    ...icon('proto'),
    ...icon('protractor'),
    ...icon('pug'),
    ...icon('puppet'),
    ...icon('puppeteer'),
    ...icon('purescript'),
    ...icon('python-misc'),
    ...icon('python'),
    ...icon('qsharp'),
    ...icon('quasar'),
    ...icon('r'),
    ...icon('racket'),
    ...icon('raml'),
    ...icon('razor'),
    ...icon('react'),
    ...icon('reactts'),
    ...icon('readme'),
    ...icon('reason'),
    ...icon('red'),
    ...icon('redhat'),
    ...icon('remix'),
    ...icon('renovate'),
    ...icon('replit'),
    ...icon('rescript'),
    ...icon('restql'),
    ...icon('riot'),
    ...icon('roadmap'),
    ...icon('robots'),
    ...icon('rollup'),
    ...icon('rome'),
    ...icon('routing'),
    ...icon('rubocop'),
    ...icon('ruby'),
    ...icon('rust'),
    ...icon('san'),
    ...icon('sas'),
    ...icon('sass'),
    ...icon('sbt'),
    ...icon('scala'),
    ...icon('scheme'),
    ...icon('search'),
    ...icon('semantic-release'),
    ...icon('sentry'),
    ...icon('sequelize'),
    ...icon('serverless'),
    ...icon('settings'),
    ...icon('shaderlab'),
    ...icon('siyuan'),
    ...icon('sketch'),
    ...icon('slim'),
    ...icon('slug'),
    ...icon('smarty'),
    ...icon('sml'),
    ...icon('snowpack'),
    ...icon('snyk'),
    ...icon('solidity'),
    ...icon('steadybit'),
    ...icon('stencil'),
    ...icon('stitches'),
    ...icon('storybook'),
    ...icon('stryker'),
    ...icon('stylelint'),
    ...icon('stylus'),
    ...icon('sublime'),
    ...icon('svelte'),
    ...icon('svg'),
    ...icon('svgo'),
    ...icon('svgr'),
    ...icon('swc'),
    ...icon('swc-compiler'),
    ...icon('swift'),
    ...icon('table'),
    ...icon('tailwind'),
    ...icon('tauri'),
    ...icon('tcl'),
    ...icon('teal'),
    ...icon('template'),
    ...icon('terraform'),
    ...icon('test-go'),
    ...icon('testjs'),
    ...icon('testjsx'),
    ...icon('testts'),
    ...icon('tex'),
    ...icon('textlint'),
    ...icon('tobi'),
    ...icon('tobimake'),
    ...icon('todo'),
    ...icon('travis'),
    ...icon('tsconfig'),
    ...icon('turborepo'),
    ...icon('twig'),
    ...icon('twine'),
    ...icon('txt'),
    ...icon('typescript'),
    ...icon('typescriptdef'),
    ...icon('uml'),
    ...icon('url'),
    ...icon('vagrant'),
    ...icon('vala'),
    ...icon('velocity'),
    ...icon('vercel'),
    ...icon('verilog'),
    ...icon('vfl'),
    ...icon('video'),
    ...icon('vim'),
    ...icon('virtual'),
    ...icon('visualstudio'),
    ...icon('vite'),
    ...icon('vitest'),
    ...icon('vlang'),
    ...icon('vscode'),
    ...icon('vue-config'),
    ...icon('vue'),
    ...icon('wakatime'),
    ...icon('wallaby'),
    ...icon('watchman'),
    ...icon('webassembly'),
    ...icon('webhint'),
    ...icon('webpack'),
    ...icon('windi'),
    ...icon('windicss'),
    ...icon('wolframlanguage'),
    ...icon('word'),
    ...icon('xaml'),
    ...icon('xml'),
    ...icon('yaml'),
    ...icon('yang'),
    ...icon('yarn'),
    ...icon('zig'),
    ...icon('zip'),
  };
};

export { generateIcons, iconsets };
