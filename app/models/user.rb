class User < ApplicationRecord
    belongs_to :admin
    has_many :investments
    has_many :collections
    has_many :tutorials
    has_many :nfts
    has_many :cowries, through: :investments
    has_many :artworks, through: :collections

end
