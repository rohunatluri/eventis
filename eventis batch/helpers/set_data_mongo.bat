cd c:/
cd MongoDB/Server/3.0/bin
mongo eventis --eval "db.events.drop(), desc = 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. <br><br> Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. <br><br>Maecenas nec odio et ante tincidunt tempus.', newshit = [{'poster': 'user1', 'name': 'event1', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '94', 'time': '5:00 PM', 'date': '10/23/15', 'location': 'loc1', 'datePosted': '10/21/15 7:00 AM'}, {'poster': 'user2', 'name': 'event2', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '73', 'time': '10:00 PM', 'date': '10/27/15', 'location': 'loc2', 'datePosted': '10/25/15 4:00 AM'}, {'poster': 'user3', 'name': 'event3', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '149', 'time': '8:00 PM', 'date': '10/24/15', 'location': 'loc3', 'datePosted': '10/22/15 10:00 AM'}, {'poster': 'user4', 'name': 'event4', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '95', 'time': '7:00 PM', 'date': '10/27/15', 'location': 'loc4', 'datePosted': '10/25/15 8:00 AM'}, {'poster': 'user5', 'name': 'event5', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '86', 'time': '8:00 PM', 'date': '10/31/15', 'location': 'loc5', 'datePosted': '10/29/15 2:00 AM'}, {'poster': 'user6', 'name': 'event6', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '126', 'time': '12:00 PM', 'date': '10/27/15', 'location': 'loc6', 'datePosted': '10/25/15 5:00 AM'}, {'poster': 'user7', 'name': 'event7', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '70', 'time': '4:00 PM', 'date': '10/23/15', 'location': 'loc7', 'datePosted': '10/21/15 5:00 AM'}, {'poster': 'user8', 'name': 'event8', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '128', 'time': '5:00 PM', 'date': '10/23/15', 'location': 'loc8', 'datePosted': '10/21/15 11:00 AM'}, {'poster': 'user9', 'name': 'event9', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '73', 'time': '2:00 PM', 'date': '10/25/15', 'location': 'loc9', 'datePosted': '10/23/15 3:00 AM'}, {'poster': 'user10', 'name': 'event10', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '112', 'time': '12:00 PM', 'date': '10/25/15', 'location': 'loc10', 'datePosted': '10/23/15 9:00 AM'}, {'poster': 'user11', 'name': 'event11', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '61', 'time': '7:00 PM', 'date': '10/25/15', 'location': 'loc11', 'datePosted': '10/23/15 1:00 AM'}, {'poster': 'user12', 'name': 'event12', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '144', 'time': '10:00 PM', 'date': '10/29/15', 'location': 'loc12', 'datePosted': '10/27/15 7:00 AM'}, {'poster': 'user13', 'name': 'event13', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '137', 'time': '6:00 PM', 'date': '10/30/15', 'location': 'loc13', 'datePosted': '10/28/15 9:00 AM'}, {'poster': 'user14', 'name': 'event14', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '71', 'time': '5:00 PM', 'date': '10/25/15', 'location': 'loc14', 'datePosted': '10/23/15 2:00 AM'}, {'poster': 'user15', 'name': 'event15', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '104', 'time': '2:00 PM', 'date': '10/30/15', 'location': 'loc15', 'datePosted': '10/28/15 6:00 AM'}, {'poster': 'user16', 'name': 'event16', 'descr': desc, 'tags': ['#tag1','#tag2','#tag3'], 'votes': '89', 'time': '9:00 PM', 'date': '10/23/15', 'location': 'loc16', 'datePosted': '10/21/15 5:00 AM'}], db.events.insert(newshit)"

pause