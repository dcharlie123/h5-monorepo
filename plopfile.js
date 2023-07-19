module.exports = function (plop) {
  plop.setGenerator("controller", {
    description: "创建H5基础模板",
    prompts: [
      {
        type: "list",
        name: "year",
        message: "选择当前年份对应的文件夹",
        choices: ["v22", "v23", "v24", "v25"],
      },
      {
        type: "input",
        name: "projectName",
        message: "项目名称",
        validate: function (name) {
          let done = this.async();
          setTimeout(function () {
            if (!name || !name.trim()) {
              // Pass the return value in the done callback
              done("项目名称不能为空");
              return;
            }
            // Pass the return value in the done callback
            done(null, true);
          }, 300);
        },
      },
      {
        type: "confirm",
        name: "needRouter",
        message: "是否需要vue-router(内含router参考示例)",
      },
      {
        type: "list",
        name: "routerMode",
        message: "选择路由模式",
        choices: [
          {
            name: "history(推荐)",
            value: 1,
          },
          {
            name: "hash(不推荐)",
            value: 0,
          },
        ],
        when: (hash) => {
          return hash.needRouter;
        },
      },
      {
        type: "confirm",
        name: "needPinia",
        message: "是否需要Pinia（h5一般用不上）",
      },
      {
        type: "confirm",
        name: "needDirective",
        message: "是否需要全局指令示例（推荐，若不合适生成后可以删掉）",
        when: (hash) => {
          return hash.needRouter;
        },
      },
    ],
    actions: (data) => {
      let { needRouter } = data;
      let actions = [];
      let indexhtml = {
        type: "add",
        path: "src/pages/{{year}}/{{projectName}}/index.html",
        templateFile: "./h5_template/index.html.hbs",
      };
      actions.push(indexhtml);
      let mainjs = {
        type: "add",
        path: "src/pages/{{year}}/{{projectName}}/main.js",
        templateFile: "./h5_template/main.js.hbs",
      };
      actions.push(mainjs);
      let appvue = {
        type: "add",
        path: "src/pages/{{year}}/{{projectName}}/App.vue",
        templateFile: "./h5_template/App.vue.hbs",
      };
      actions.push(appvue);
      actions.push({
        type: "add",
        path: "src/pages/{{year}}/{{projectName}}/vue.config.js",
        templateFile: "./h5_template/vue.config.js.hbs",
      });
      actions.push({
        type: "add",
        path: "src/pages/{{year}}/{{projectName}}/package.json",
        templateFile: "./h5_template/package.json.hbs",
      });
      if (needRouter) {
        actions.push({
          type: "add",
          path: "src/pages/{{year}}/{{projectName}}/router.js",
          templateFile: "./h5_template/router.js.hbs",
        });
        let appHome = {
          type: "add",
          path: "src/pages/{{year}}/{{projectName}}/views/AppHome.vue",
          templateFile: "./h5_template/views/AppHome.vue.hbs",
        };
        actions.push(appHome);
        let modal = {
          type: "add",
          path: "src/pages/{{year}}/{{projectName}}/components/Modal.vue",
          templateFile: "./h5_template/components/Modal.vue.hbs",
        };
        actions.push(modal);
      }
      return actions;
    },
  });
};
