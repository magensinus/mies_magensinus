# frozen_string_literal: true

module Mies
  class Engine < Rails::Engine
    # Mies config misc
    initializer :mies_config_misc do
      Rails.application.config.sass.inline_source_maps = true
    end

    # Mies load assets
    initializer :mies_load_assets do
      Rails.application.config.assets.paths << root.join("assets")
      Rails.application.config.assets.paths << root.join("assets", "icons")
      Rails.application.config.assets.paths << root.join("assets", "images")
      Rails.application.config.assets.paths << root.join("assets", "stylesheets")
      Rails.application.config.assets.precompile += %w[*.gif *.png *.jpg *.jpeg *.pdf *.svg *.eot *.woff *.ttf]
    end
  end
end
