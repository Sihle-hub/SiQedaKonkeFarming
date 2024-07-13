    document.addEventListener('DOMContentLoaded', function() {
      const products = [
        {
          category: 'FirmFarm Chicken',
          items: [
            { name: '7 days chicks(pack)', image: '7days.jpg', price: 1700.00 },
            { name: 'One day chicks(pack)', image: 'dayold.jpg', price: 1200.00 },
            { name: 'Live Chicken', image: 'oldones.jpg', price: 120.00 }
          ]
        },
        {
          category: 'Meat',
          items: [
            { name: 'slaughtered chickens', image: 'slaugh.jpg', price: 130.00},
            { name: '2kg Mix Portion', image: 'portion.jpg', price: 150.00 }
          ]
        },
        {
          category: 'Feed',
          items: [
            { name: '50kg Starter feed', image: 'sfeed.jpg', price: 520.00 },
            { name: 'Grower feed', image: 'gfeed.jpg', price: 500.00 },
            { name: 'Feed combo', image: 'ffeed.jpg', price: 2000.00},
            { name: 'Chicks+Feed(pack)', image: 'cfeed.jpg', price: 1900.00 }
          ]
        }
        // Add more categories and items as needed
      ];

      function generateCategoryHTML(category, items) {
        let categoryHTML = '';
        items.forEach(item => {
          categoryHTML += `
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-price">R${item.price.toFixed(2)}</p>
                  <label for="quantity-${item.name}" class="item-label">Quantity:</label>
                  <input type="number" id="quantity-${item.name}" class="form-control quantity-input" value="0" min="0" data-price="${item.price}">
                </div>
              </div>
            </div>
          `;
        });
        return categoryHTML;
      }

      function calculateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.quantity-input').forEach(input => {
          const price = parseFloat(input.dataset.price);
          const quantity = parseInt(input.value);
          totalPrice += price * quantity;
        });
        return totalPrice.toFixed(2);
      }

      function updateTotalPrice() {
        const totalPrice = calculateTotalPrice();
        document.getElementById('total-price').textContent = `R${totalPrice}`;
      }

      const firmFarmChickenDiv = document.getElementById('firmfarm-chicken');
      const meatDiv = document.getElementById('meat');
      const feedDiv = document.getElementById('feed');

      products.forEach(product => {
        if (product.category === 'FirmFarm Chicken') {
          firmFarmChickenDiv.innerHTML = generateCategoryHTML(product.category, product.items);
        } else if (product.category === 'Meat') {
          meatDiv.innerHTML = generateCategoryHTML(product.category, product.items);
        } else if (product.category === 'Feed') {
          feedDiv.innerHTML = generateCategoryHTML(product.category, product.items);
        }
      });

      document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
          updateTotalPrice();
        });
      });

      const selectedItemsList = document.getElementById('selected-items-list');
      const modalTotalPrice = document.getElementById('modal-total-price');

      document.getElementById('proceed-btn').addEventListener('click', function() {
        // Clear previous list and total price
        selectedItemsList.innerHTML = '';
        modalTotalPrice.textContent = `R0.00`;

        let totalPrice = 0;

        // Iterate through inputs to find selected items
        document.querySelectorAll('.quantity-input').forEach(input => {
          const quantity = parseInt(input.value);
          if (quantity > 0) {
            const itemName = input.id.replace('quantity-', '');
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} * ${quantity}`;
            selectedItemsList.appendChild(listItem);

            // Calculate total price for selected items
            const price = parseFloat(input.dataset.price);
            totalPrice += price * quantity;
          }
        });

        // Update modal total price
        modalTotalPrice.textContent = `R${totalPrice.toFixed(2)}`;
      });

      document.getElementById('order-btn').addEventListener('click', function() {
        const selectedItems = [];

        // Collect selected items
        document.querySelectorAll('.quantity-input').forEach(input => {
          const quantity = parseInt(input.value);
          if (quantity > 0) {
            const itemName = input.id.replace('quantity-', '');
            selectedItems.push({ name: itemName, quantity: quantity });
          }
        });

        // Get total price
        const totalPrice = parseFloat(calculateTotalPrice());

        // Send selected items and total price to Spring Boot controller
        fetch('/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ items: selectedItems, totalPrice: totalPrice })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Order successfully placed:', data);
          // Optionally, you can redirect or show a success message here
        })
        .catch(error => {
          console.error('Error during order:', error);
          // Handle error scenarios here
        });
      });
    });