import { Icon } from "./types/Icon";
function icon(name: string): Icon {
  return {
    [`_f_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

function iconGeneric(name: string): Icon {
  return {
    [`_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}
function folderIcon(name: string): Icon {
  return {
    [`_fd_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

const icons: Icon = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...folderIcon("folder_app"),
  ...folderIcon("folder_app_open"),
  ...folderIcon("folder_src"),
  ...folderIcon("folder_src_open"),
  ...folderIcon("folder_component"),
  ...folderIcon("folder_component_open"),
  ...folderIcon("folder_api"),
  ...folderIcon("folder_api_open"),
  ...folderIcon("folder_typescript"),
  ...folderIcon("folder_typescript_open"),
  ...folderIcon("folder_node"),
  ...folderIcon("folder_node_open"),
  ...folderIcon("folder_audio"),
  ...folderIcon("folder_audio_open"),
  ...folderIcon("folder_aurelia"),
  ...folderIcon("folder_aurelia_open"),
  ...folderIcon("folder_aws"),
  ...folderIcon("folder_aws_open"),
  ...folderIcon("folder_azure"),
  ...folderIcon("folder_azure_open"),
  ...folderIcon("folder_images"),
  ...folderIcon("folder_images_open"),
  ...folderIcon("folder_asset"),
  ...folderIcon("folder_asset_open"),
  ...folderIcon("folder_css"),
  ...folderIcon("folder_css_open"),
  ...folderIcon("folder_dist"),
  ...folderIcon("folder_dist_open"),
  ...folderIcon("folder_model"),
  ...folderIcon("folder_model_open"),
  ...folderIcon("folder_config"),
  ...folderIcon("folder_config_open"),
  ...folderIcon("folder_git"),
  ...folderIcon("folder_git_open"),
  ...folderIcon("folder_github"),
  ...folderIcon("folder_github_open"),
  ...folderIcon("folder_gitlab"),
  ...folderIcon("folder_gitlab_open"),
  ...folderIcon("folder_vscode"),
  ...folderIcon("folder_vscode_open"),
  ...folderIcon("folder_webpack"),
  ...folderIcon("folder_webpack_open"),
  ...folderIcon("folder_view"),
  ...folderIcon("folder_view_open"),
  ...folderIcon("folder_video"),
  ...folderIcon("folder_video_open"),
  ...folderIcon("folder_tools"),
  ...folderIcon("folder_tools_open"),
  ...folderIcon("folder_utils"),
  ...folderIcon("folder_utils_open"),
  ...folderIcon("folder_theme"),
  ...folderIcon("folder_theme_open"),
  ...folderIcon("folder_temp"),
  ...folderIcon("folder_temp_open"),
  ...folderIcon("folder_template"),
  ...folderIcon("folder_template_open"),
  ...folderIcon("folder_svg"),
  ...folderIcon("folder_svg_open"),
  ...folderIcon("folder_layout"),
  ...folderIcon("folder_layout_open"),
  ...folderIcon("folder_library"),
  ...folderIcon("folder_library_open"),
  ...folderIcon("folder_i18n"),
  ...folderIcon("folder_i18n_open"),
  ...folderIcon("folder_database"),
  ...folderIcon("folder_database_open"),
  ...folderIcon("folder_controller"),
  ...folderIcon("folder_controller_open"),
  ...folderIcon("folder_docker"),
  ...folderIcon("folder_docker_open"),
  ...folderIcon("folder_javascript"),
  ...folderIcon("folder_javascript_open"),
  ...folderIcon("folder_log"),
  ...folderIcon("folder_log_open"),
  ...folderIcon("folder_include"),
  ...folderIcon("folder_include_open"),
  ...folderIcon("folder_less"),
  ...folderIcon("folder_less_open"),
  ...folderIcon("folder_sass"),
  ...folderIcon("folder_sass_open"),
  ...folderIcon("folder_docs"),
  ...folderIcon("folder_docs_open"),
  ...folderIcon("folder_fonts"),
  ...folderIcon("folder_fonts_open"),
  ...folderIcon("folder_test"),
  ...folderIcon("folder_test_open"),
  ...folderIcon("folder_core"),
  ...folderIcon("folder_core_open"),
  ...folderIcon("folder_bower"),
  ...folderIcon("folder_bower_open"),
  ...folderIcon("folder_secure"),
  ...folderIcon("folder_secure_open"),
  ...folderIcon("folder_command"),
  ...folderIcon("folder_command_open"),
  ...folderIcon("folder_error"),
  ...folderIcon("folder_error_open"),
  ...folderIcon("folder_event"),
  ...folderIcon("folder_event_open"),
  ...folderIcon("folder_expo"),
  ...folderIcon("folder_expo_open"),
  ...folderIcon("folder_export"),
  ...folderIcon("folder_export_open"),
  ...folderIcon("folder_firebase"),
  ...folderIcon("folder_firebase_open"),
  ...folderIcon("folder_flow"),
  ...folderIcon("folder_flow_open"),
  ...folderIcon("folder_environment"),
  ...folderIcon("folder_environment_open"),
  ...folderIcon("folder_wordpress"),
  ...folderIcon("folder_wordpress_open"),
  ...folderIcon("folder_svelte"),
  ...folderIcon("folder_svelte_open"),
  ...folderIcon("folder_sublime"),
  ...folderIcon("folder_sublime_open"),
  ...folderIcon("folder_stylus"),
  ...folderIcon("folder_stylus_open"),
  ...folderIcon("folder_vm"),
  ...folderIcon("folder_vm_open"),
  ...folderIcon("folder_route"),
  ...folderIcon("folder_route_open"),
  ...folderIcon("folder_public"),
  ...folderIcon("folder_public_open"),
  ...folderIcon("folder_nuxt"),
  ...folderIcon("folder_nuxt_open"),
  ...folderIcon("folder_rules"),
  ...folderIcon("folder_rules_open"),
  ...folderIcon("folder_upload"),
  ...folderIcon("folder_upload_open"),
  ...folderIcon("folder_update"),
  ...folderIcon("folder_update_open"),
  ...folderIcon("folder_vuepress"),
  ...folderIcon("folder_vuepress_open"),
  ...folderIcon("folder_script"),
  ...folderIcon("folder_script_open"),
  ...folderIcon("folder_plugin"),
  ...folderIcon("folder_plugin_open"),
  ...folderIcon("folder_python"),
  ...folderIcon("folder_python_open"),
  ...folderIcon("folder_php"),
  ...folderIcon("folder_php_open"),
  ...folderIcon("folder_package"),
  ...folderIcon("folder_package_open"),
  ...folderIcon("folder_phpmailer"),
  ...folderIcon("folder_phpmailer_open"),
  ...folderIcon("folder_middleware"),
  ...folderIcon("folder_middleware_open"),
  ...folderIcon("folder_markdown"),
  ...folderIcon("folder_markdown_open"),
  ...folderIcon("folder_serverless"),
  ...folderIcon("folder_serverless_open"),
  ...folderIcon("folder_server"),
  ...folderIcon("folder_server_open"),
  ...folderIcon("folder_shared"),
  ...folderIcon("folder_shared_open"),
  ...folderIcon("folder_meta"),
  ...folderIcon("folder_meta_open"),
  ...folderIcon("folder_json"),
  ...folderIcon("folder_json_open"),
  ...folderIcon("folder_gradle"),
  ...folderIcon("folder_gradle_open"),
  ...folderIcon("folder_terraform"),
  ...folderIcon("folder_terraform_open"),
  ...folderIcon("folder_interface"),
  ...folderIcon("folder_interface_open"),
  ...folderIcon("folder_debug"),
  ...folderIcon("folder_debug_open"),
  ...folderIcon("folder_functions"),
  ...folderIcon("folder_functions_open"),
  ...folderIcon("folder_kubernetes"),
  ...folderIcon("folder_kubernetes_open"),
  ...folderIcon("folder_storybook"),
  ...folderIcon("folder_storybook_open"),
  ...folderIcon("folder_coverage"),
  ...folderIcon("folder_coverage_open"),
  ...folderIcon("folder_container"),
  ...folderIcon("folder_container_open"),
  ...folderIcon("folder_graphql"),
  ...folderIcon("folder_graphql_open"),
  ...folderIcon("folder_ios"),
  ...folderIcon("folder_ios_open"),
  ...folderIcon("folder_keys"),
  ...folderIcon("folder_keys_open"),
  ...folderIcon("folder_intellij"),
  ...folderIcon("folder_intellij_open"),
  ...folderIcon("folder_gulp"),
  ...folderIcon("folder_gulp_open"),
  ...folderIcon("folder_helper"),
  ...folderIcon("folder_helper_open"),
  ...folderIcon("folder_home"),
  ...folderIcon("folder_home_open"),
  ...folderIcon("folder_tasks"),
  ...folderIcon("folder_tasks_open"),
  ...folderIcon("folder_syntax"),
  ...folderIcon("folder_syntax_open"),
  ...folderIcon("folder_stack"),
  ...folderIcon("folder_stack_open"),
  ...folderIcon("folder_contract"),
  ...folderIcon("folder_contract_open"),
  ...folderIcon("folder_admin"),
  ...folderIcon("folder_admin_open"),
  ...folderIcon("folder_quasar"),
  ...folderIcon("folder_quasar_open"),
  ...folderIcon("folder_archive"),
  ...folderIcon("folder_archive_open"),
  ...folderIcon("folder_animation"),
  ...folderIcon("folder_animation_open"),
  ...folderIcon("folder_batch"),
  ...folderIcon("folder_batch_open"),
  ...folderIcon("folder_client"),
  ...folderIcon("folder_client_open"),
  ...folderIcon("folder_base"),
  ...folderIcon("folder_base_open"),
  ...folderIcon("folder_delta"),
  ...folderIcon("folder_delta_open"),
  ...folderIcon("folder_constant"),
  ...folderIcon("folder_constant_open"),
  ...folderIcon("folder_guard"),
  ...folderIcon("folder_guard_open"),
  ...folderIcon("folder_global"),
  ...folderIcon("folder_global_open"),
  ...folderIcon("folder_pipe"),
  ...folderIcon("folder_pipe_open"),
  ...folderIcon("folder_scala"),
  ...folderIcon("folder_scala_open"),
  ...folderIcon("folder_husky"),
  ...folderIcon("folder_husky_open"),
  ...folderIcon("folder_hook"),
  ...folderIcon("folder_hook_open"),
  ...folderIcon("folder_prisma"),
  ...folderIcon("folder_prisma_open"),
  ...folderIcon("folder_store"),
  ...folderIcon("folder_store_open"),
  ...icon("firebase_"),
  ...icon("terraform"),
  ...icon("ember"),
  ...icon("blink"),
  ...icon("adonis"),
  ...icon("applescript"),
  ...icon("ada"),
  ...icon("android_"),
  ...icon("arduino"),
  ...icon("elm"),
  ...icon("apollo"),
  ...icon("astyle"),
  ...icon("aurelia_"),
  ...icon("azure_"),
  ...icon("bitbucket"),
  ...icon("changelog"),
  ...icon("authors"),
  ...icon("django"),
  ...icon("word"),
  ...icon("windicss"),
  ...icon("vim"),
  ...icon("svelte_"),
  ...icon("sass_"),
  ...icon("less_"),
  ...icon("stylus_"),
  ...icon("postcssconfig"),
  ...icon("docker_"),
  ...icon("dockerignore"),
  ...icon("dockerdebug"),
  ...icon("git_"),
  ...icon("readme"),
  ...icon("html"),
  ...icon("json_"),
  ...icon("rjson"),
  ...icon("markdown_"),
  ...icon("css_"),
  ...icon("cssmap"),
  ...icon("js"),
  ...icon("jsmap"),
  ...icon("typescript_"),
  ...icon("typescriptdef"),
  ...icon("tsx"),
  ...icon("vue"),
  ...icon("image"),
  ...icon("imageico"),
  ...icon("zip"),
  ...icon("yarn"),
  ...icon("yarnerror"),
  ...icon("error"),
  ...icon("npm"),
  ...icon("svg_"),
  ...icon("yaml"),
  ...icon("font_"),
  ...icon("php_"),
  ...icon("phpunit"),
  ...icon("twig"),
  ...icon("composer"),
  ...icon("symfony"),
  ...icon("xml"),
  ...icon("robots"),
  ...icon("bundler"),
  ...icon("stylelint"),
  ...icon("prettier"),
  ...icon("python_"),
  ...icon("log_"),
  ...icon("license"),
  ...icon("audio_"),
  ...icon("lua"),
  ...icon("csharp"),
  ...icon("dartlang"),
  ...icon("eslint"),
  ...icon("handlebars"),
  ...icon("webpack_"),
  ...icon("ruby"),
  ...icon("erb"),
  ...icon("jest"),
  ...icon("babel"),
  ...icon("toml"),
  ...icon("elixir"),
  ...icon("exs"),
  ...icon("rust"),
  ...icon("reactjs"),
  ...icon("reactts"),
  ...icon("angular"),
  ...icon("rollup"),
  ...icon("java"),
  ...icon("gulp"),
  ...icon("grunt"),
  ...icon("editorconfig"),
  ...icon("shell"),
  ...icon("vscode_"),
  ...icon("ai"),
  ...icon("photoshop"),
  ...icon("pdf"),
  ...icon("go"),
  ...icon("go_package"),
  ...icon("tmpl"),
  ...icon("browserslist"),
  ...icon("erlang"),
  ...icon("vite"),
  ...icon("mint"),
  ...icon("eex"),
  ...icon("env"),
  ...icon("nvm"),
  ...icon("sql"),
  ...icon("nginx"),
  ...icon("conf"),
  ...icon("c"),
  ...icon("cpp"),
  ...icon("powershell"),
  ...icon("powershelldata"),
  ...icon("powershellmodule"),
  ...icon("njk"),
  ...icon("blade"),
  ...icon("liquid"),
  ...icon("pug"),
  ...icon("cheader"),
  ...icon("m"),
  ...icon("swift"),
  ...icon("graphql"),
  ...icon("groovy"),
  ...icon("testjs"),
  ...icon("testts"),
  ...icon("storybook"),
  ...icon("wasm"),
  ...icon("cli"),
  ...icon("bat"),
  ...icon("nuxt_"),
  ...icon("netlify"),
  ...icon("vercel"),
  ...icon("tailwind"),
  ...icon("windi"),
  ...icon("nodemon"),
  ...icon("jinja"),
  ...icon("haml"),
  ...icon("smarty"),
  ...icon("haskell"),
  ...icon("gradle_"),
  ...icon("nim"),
  ...icon("nestjs"),
  ...icon("nestjscontroller"),
  ...icon("nestjsservice"),
  ...icon("nestjsmodule"),
  ...icon("nestjsguard"),
  ...icon("nestjsdecorator"),
  ...icon("nestjsfilter"),
  ...icon("jenkins"),
  ...icon("txt"),
  ...icon("binary"),
  ...icon("cert"),
  ...icon("key"),
  ...icon("prisma"),
  ...icon("compodoc"),
  ...icon("julia"),
  ...icon("csv"),
  ...icon("karma"),
  ...icon("tsconfig"),
  ...icon("jsconfig"),
  ...icon("travis"),
  ...icon("razor"),
  ...icon("cshtml"),
  ...icon("jsp"),
  ...icon("avi"),
  ...icon("mp4"),
  ...icon("mov"),
  ...icon("video_"),
  ...icon("rescript"),
  ...icon("bsconfig"),
  ...icon("opengl"),
  ...icon("llvm"),
  ...icon("info"),
  ...icon("ipynb"),
  ...icon("sol"),
  ...icon("bicep"),
  ...icon("qt"),
  ...icon("ui"),
  ...icon("prolog"),
  ...icon("user"),
};

export default icons;
