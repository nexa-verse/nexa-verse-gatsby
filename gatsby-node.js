const path = require("path")
const services = require("./src/data/services")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  services.forEach(service => {
    createPage({
      path: `/uslugi/${service.slug}`,
      component: path.resolve(`src/templates/service.jsx`),
      context: service,
    })
  })
}