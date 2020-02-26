from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)
global_id = 0

sales = [
	{
		"salesperson": "James D. Halpert",
		"client": "Shake Shack",
		"reams": 100
	},
	{
		"salesperson": "Stanley Hudson",
		"client": "Toast",
		"reams": 400
	},
	{
		"salesperson": "Michael G. Scott",
		"client": "Computer Science Department",
		"reams": 1000
	},
]

clients = [
    "Shake Shack",
    "Toast",
    "Computer Science Department",
    "Teacher's College",
    "Starbucks",
    "Subsconsious",
    "Flat Top",
    "Joe's Coffee",
    "Max Caffe",
    "Nussbaum & Wu",
    "Taco Bell",
]

non_ppc_people = [
    "Phyllis",
    "Dwight",
    "Oscar",
    "Creed",
    "Pam",
    "Jim",
    "Stanley",
    "Michael",
    "Kevin",
    "Kelly"
]

ppc_people = [
    "Angela"
]


@app.route('/')
def hello_world():
   return 'Why are you here'

@app.route('/infinity')
def infinity():
    global clients
    clients = list(set(clients))
    print("the clients are", clients) 
    return render_template('cu-paper-infinity.html', data = sales, clients = clients)

@app.route('/delete_sale', methods=['GET', 'POST'])
def delete_sale():
    global sales

    json_data = request.get_json()
    #takes in id
    id = int(json_data["id"])
    sales.remove(sales[id]) 
    #return all the sales
    return jsonify(data = sales)

@app.route('/save_sale', methods=['GET', 'POST'])
def add_sale():
    #takes in sale, adds id and updates data
    global sales 
    global global_id

    json_data = request.get_json()
  
    salesperson = json_data["salesperson"]
    client = json_data["client"]
    reams = json_data["reams"]
    
    # add new entry to array with 
    # a new id and the name the user sent in JSON
    new_name_entry = {
        "salesperson": salesperson,
        "client": client,
        "reams": reams,
        "id": global_id
    }
    global_id +=1 

    if client not in clients:
        clients.append(client)
    sales.insert(0,new_name_entry)

    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = sales)

@app.route('/ppc')
def ppc():
    return render_template('ppc.html', ppc = ppc_people, non_ppc = non_ppc_people)

@app.route('/move_to_ppc', methods=['GET', 'POST'])
def move_to_ppc():
    global non_ppc_people
    global ppc_people

    json_data = request.get_json()
    print(json_data)
    name = json_data["name"]
    ppc_people.append(name)
    non_ppc_people.remove(name)
    print("current non-ppc from python", non_ppc_people)
    return jsonify(ppc = ppc_people, non_ppc = non_ppc_people)

@app.route('/move_to_non_ppc', methods = ['GET', 'POST'])
def move_to_non_ppc():
        global non_ppc_people
        #print("current non-ppc from python", non_ppc_people)
        global ppc_people
        json_data = request.get_json()
        name = json_data["name"]
        non_ppc_people.append(name)
        ppc_people.remove(name)
        return jsonify(ppc = ppc_people, non_ppc = non_ppc_people)









if __name__ == '__main__':
   app.run(debug = True)




