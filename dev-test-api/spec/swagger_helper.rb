# frozen_string_literal: true

require 'rails_helper'

RSpec.configure do |config|
  # Folder where Swagger JSON/YAML files are generated
  config.openapi_root = Rails.root.join('swagger').to_s

  # Define Swagger documents and global metadata
  config.openapi_specs = {
    'v1/swagger.yaml' => {
      openapi: '3.0.1',
      info: {
        title: 'Task API',
        version: 'v1',
        description: 'API documentation for managing tasks'
      },
      paths: {},
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local development server'
        }
      ]
    }
  }

  # Output format for Swagger files
  config.openapi_format = :yaml
end
