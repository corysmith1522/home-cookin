# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Order.destroy_all
Meal.destroy_all
User.destroy_all

@user1 = User.create!(username: 'test', email: 'test@gmail.com', phone_number: '540-797-8445', password: '123456')

puts "#{User.count} users created"

@meal1 = Meal.create!(name: 'Honey Chicken', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5c4792dae3f339519e330ce2-804fe25d.jpg', description: 'Breaded chicken meets a glaze of hot honey, served with bbq seasoned potatoes and steamed broccoli', price: 12)
@meal2 = Meal.create!(name: 'Hawaiian Pork Bowl', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5fa56ef97511fc2549429dc0-8ace7f84.jpg', description: 'Let us bring the luau flavor to you with teriyaki pork, peppers and onions mixed into a bowl with kiwi salsa and a light cream sauce', price: 10)
@meal3 = Meal.create!(name: 'Black Bean Enchiladas', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5f68fc1cfa74764480425bc6-b3fc7c04.jpg', description: 'Melt your mouth with this bundle of peppers, tomatoes and beans, coated in Monterey Jack cheese, mild green salsa and a southwest cream sauce', price: 9)
@meal4 = Meal.create!(name: 'Parmesan Chicken Spaghetti', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5f7dce820dc3810e9528b2b2-a82059d4.jpg', description: 'Our take on the perfect mix of chicken parmesan and chicken alfredo, infused with roasted garlic and tomatoes', price: 11)
@meal5 = Meal.create!(name: 'BBQ Chicken Bowl', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/smokehouse-pulled-chicken-bowls-e6772b98.jpg', description: 'Pulled, slow-cooked chicken glazed in our sweet, tangy bbq sauce comes prepared with rice, buttery corn, pickled shallot, and sliced jalapeno, then drizzled in light cream sauce', price: 10)
@meal6 = Meal.create!(name: 'Steak and Potatoes', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5f44073c0b28c674c20037ff-d5baf15a.jpg', description: 'A classic with a twist: pan-seared steak topped with sherry sauce, served with roasted garlic parmesan potato clusters and green beans', price: 18)
@meal7 = Meal.create!(name: 'Pork a la Balsamic Fig', image:'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/figgy-balsamic-pork-119dd0ae.jpg', description: 'Pork tenderloin smothered in our tangy balsamic fig sauce served with roasted potatoes and a mixed green salad', price: 12)
@meal8 = Meal.create!(name: 'Pineapple Chicken Tacos', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/charred-pineapple-chicken-tacos-6e446767.jpg', description: 'Grilled chicken sweetened with charred pineapples, mixed in with pico de gallo and topped with red pepper cream sauce', price: 10)
@meal9 = Meal.create!(name: 'Thai Chili Pork', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/5efb358e43975d50ea6927d2-03092082.jpg', description: 'Savory pork, peppers and onions blended in a sweet chili sauce over rice, with roasted peanuts for crunch', price: 13)
@meal10 = Meal.create!(name: 'Chicken Shawarma', image: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/street-cart-style-chicken-shawarma-bowls-8df1f17f.jpg', description: 'Marinated chicken blended with spices and yogurt, piled over pistachio rice and sauteed peppers then drizzled with a cilantro sauce', price: 11)

puts "#{Meal.count} meals created"

@order1 = Order.create!(name_on_order: 'Tester', user: @user1)

puts "#{Order.count} orders created"