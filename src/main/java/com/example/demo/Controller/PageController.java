package com.example.demo.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class PageController {
	
	@GetMapping("/welcome_page")
	public String welcomePage() {
		return "welcome_page.html";
	}
	
	@GetMapping("/menu")
	public String menuPage() {
		return "menu.html";
	}
	
	 @PostMapping("/order")
	    public ResponseEntity<String> placeOrder(@RequestBody Map<String, Object> request) {
	        // Extract items and total price from the request
	        List<Map<String, Object>> items = (List<Map<String, Object>>) request.get("items");
	        Double totalPrice = (Double) request.get("totalPrice");

	        // Example processing logic (replace with your actual logic)
	        System.out.println("Received order with total price: " + totalPrice);
	        System.out.println("Ordered items:");
	        for (Map<String, Object> item : items) {
	            String name = (String) item.get("name");
	            Integer quantity = (Integer) item.get("quantity");
	            System.out.println(quantity + " x " + name);
	        }

	        // Example response message
	        String responseMessage = "Order successfully received";

	        // Return a success response
	        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
	    }

}
