# frozen_string_literal: true

require 'swagger_helper'

RSpec.describe 'Tasks API', type: :request do
  path '/api/v1/tasks' do
    get('List all tasks') do
      tags 'Tasks'
      produces 'application/json'

      response(200, 'successful') do
        before do
          Task.create!(title: 'Task 1', description: 'Desc 1', status: 'backlog', due_date: Time.now + 1.day)
          Task.create!(title: 'Task 2', description: 'Desc 2', status: 'done', due_date: Time.now + 1.day)
        end

        run_test!
      end
    end

    post('Create a task') do
      tags 'Tasks'
      consumes 'application/json'
      parameter name: :task, in: :body, schema: {
        type: :object,
        properties: {
          title: { type: :string },
          description: { type: :string },
          status: { type: :string },
          due_date: { type: :string, format: :date_time }
        },
        required: ['title', 'description', 'status']
      }

      response(201, 'created') do
        let(:task) do
          {
            title: 'New Task',
            description: 'New task description',
            status: 'ready_to_start',
            due_date: Time.now.iso8601
          }
        end

        run_test!
      end

      response(422, 'unprocessable entity') do
        let(:task) { { title: '', description: '', status: '' } }

        run_test!
      end
    end
  end

  path '/api/v1/tasks/{id}' do
    parameter name: :id, in: :path, type: :string, description: 'Task ID'

    get('Retrieve a task') do
      tags 'Tasks'
      produces 'application/json'

      response(200, 'successful') do
        let!(:task) { Task.create!(title: 'Test Task', description: 'Test description', status: 'backlog', due_date: Time.now + 1.day) }
        let(:id) { task.id }

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 200 response' do
          expect(response).to have_http_status(:ok)
        end
      end

      response(404, 'not found') do
        let(:id) { 'non-existent-id' }

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 404 response' do
          expect(response).to have_http_status(:not_found)
        end
      end
    end

    patch('Update a task') do
      tags 'Tasks'
      consumes 'application/json'
      parameter name: :task, in: :body, schema: {
        type: :object,
        properties: {
          title: { type: :string },
          description: { type: :string },
          status: { type: :string },
          due_date: { type: :string, format: :date_time }
        }
      }

      response(200, 'updated') do
        let!(:task) { Task.create!(title: 'Old Title', description: 'Old desc', status: 'backlog', due_date: Time.now + 1.day) }
        let(:id) { task.id }
        let(:task_params) { { title: 'Updated Title', description: 'Updated desc', status: 'done', due_date: (Time.now + 2.days).iso8601 } }

        before do |example|
          submit_request(example.metadata.merge(params: { task: task_params }))
        end

        it 'returns a 200 response' do
          expect(response).to have_http_status(:ok)
        end
      end

      response(422, 'unprocessable entity') do
        let!(:task_record) { Task.create!(title: 'Old Title', description: 'Old desc', status: 'backlog', due_date: Time.now + 1.day) }
        let(:id) { task_record.id }
        let(:task) do
          {
            title: '',
            description: '',
            status: '',
            due_date: ''
          }
        end

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 422 response' do
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end

      response(404, 'not found') do
        let(:id) { 'non-existent-id' }
        let(:task) do
          {
            title: 'Updated Title',
            description: 'Updated desc',
            status: 'done',
            due_date: (Time.now + 2.days).iso8601
          }
        end

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 404 response' do
          expect(response).to have_http_status(:not_found)
        end
      end
    end

    delete('Delete a task') do
      tags 'Tasks'

      response(204, 'deleted') do
        let!(:task) { Task.create!(title: 'To Delete', description: 'Delete me', status: 'done', due_date: Time.now + 1.day) }
        let(:id) { task.id }

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 204 response' do
          expect(response).to have_http_status(:no_content)
        end
      end

      response(404, 'not found') do
        let(:id) { 'non-existent-id' }

        before do |example|
          submit_request(example.metadata)
        end

        it 'returns a 404 response' do
          expect(response).to have_http_status(:not_found)
        end
      end
    end
  end
end
