require_relative "spec_helper"
require_relative "../sinatra_bff.rb"

def app
  SinatraBff
end

describe SinatraBff do
  it "responds with a welcome message" do
    get '/'

    last_response.body.must_include 'Welcome to the Sinatra Template!'
  end
end
