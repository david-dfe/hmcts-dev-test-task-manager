class Task < ApplicationRecord
  validates :title, presence: true
  validates :status, presence: true, inclusion: { in: [ "backlog", "ready_to_start", "in_progress", "done" ] }
  validates :due_date, presence: true
end
