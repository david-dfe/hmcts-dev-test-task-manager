# db/seeds.rb

Task.destroy_all

statuses = %w[backlog ready_to_start in_progress done]

10.times do |i|
  Task.create!(
    title: "Task #{i + 1}",
    description: "This is the description for Task #{i + 1}.",
    status: statuses.sample,
    due_date: Faker::Time.forward(days: 30, period: :evening),
    created_at: Time.now - rand(1..5).days,
    updated_at: Time.now - rand(1..2).days
  )
end

puts "✅ Seeded #{Task.count} tasks."
