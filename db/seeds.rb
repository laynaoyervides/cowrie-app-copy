# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."
# seeding the DB 
#Admin
ss = Admin.create ({
    username: "Sufyan Salazar"
})
lr = Admin.create ({
    username: "Lilli Redfin"
})
#Users
iz = User.create ({
    username: "Izabelle Cantu"
})

lg = User.create ({
    username: "Lily Goddard"
})
dg = User.create ({
    username: "Digby Gibbons"
})
am = User.create ({
    username: "Annika Moran"
})
kd = User.create ({
    username: "Kenya Dorsey"
})
lh = User.create ({
    username: "Layton Herrera"
})
kd = User.create ({
    username: "Karim Dunkley"
})
kb = User.create ({
    username: "Kayla Buxton"
})
dp = User.create ({
    username: "Domas Plant"
})
wv = User.create ({
    username: "Willard Velasquez"
})
#assign users to admin
ss.users << [iz, lg, dg, am, kd]
lr.users << [lh, kd, kb, dp, wv]
#add collections for users
coll_iz=Collection.create (
    {title:`IZA’s Collection`})
    iz.collections << coll_iz
coll_lg=Collection.create ({title:`Lily’s Collection`})
    lg.collections << coll_lg
coll_dg=Collection.create ({title:"Digby’s Collection"})
    dg.collections << coll_dg
coll_am=Collection.create ({title:"Annika’s Collection"})
    am.collections << coll_am
coll_kd=Collection.create ({title:"Kenya’s Collection"})
    kd.collections << coll_kd
coll_lh=Collection.create ({title:"Layton’s Collection"})
    lh.collections << coll_lh
coll_kd=Collection.create ({title:"Karim’s Collection"})
    kd.collections << coll_kd
coll_kb=Collection.create ({title:"Kayla’s Collection"})
    kb.collections << coll_kb
coll_dp=Collection.create ({title:"Domas’ Collection"})
    dp.collections <<coll_dp
coll_wv=Collection.create ({title:"Willard’s Collection"})
    wv.collections << coll_wv
    
#create some artworks for a collection
rr = Artwork.create ({title:"Red River"})
bb = Artwork.create ({title:"Blue Bayou"})
gg = Artwork.create ({title:"Green Grass"})
cc = Artwork.create ({title:"Cerulean Cloud"})
pp = Artwork.create ({title:"Pink Pelicans"})

#assign to collection
coll_iz.artworks << [rr, bb, gg, cc, pp]

#end of seeds
puts "✅ Done seeding!"
