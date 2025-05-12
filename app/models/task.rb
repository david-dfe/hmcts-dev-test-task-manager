class Task < ApplicationRecord
  validates :title, presence: true
  validates :status, presence: true, inclusion: { in: ['Pending', 'In Progress', 'Done'] }
  validates :due_date, presence: true
end
