Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: %i[get post patch put delete options head]
  end
end
# This configuration allows all origins to access the API and permits all HTTP methods.
# In a production environment, you should restrict the origins to trusted domains.
# You can do this by replacing '*' with a specific domain or a list of domains.
# For example:
# origins 'https://example.com', 'https://another-example.com'
# This will only allow requests from the specified domains.
#
# Note: Be cautious when using '*' in production, as it can expose your API to security risks.
# Always validate and sanitize incoming data to prevent potential attacks.
