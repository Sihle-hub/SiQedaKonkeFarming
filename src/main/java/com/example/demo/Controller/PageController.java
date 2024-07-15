package com.example.demo.Controller;

import java.util.List;
import java.util.Map;

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
	    public void placeOrder(@RequestBody Map<String,Object> request) {
	       
		 List<Map<String, Object>> items = (List<Map<String, Object>>) request.get("items");

		  for (Map<String, Object> item : items) {
		    String itemName = (String) item.get("itemName");
		    Integer quantity = (Integer) item.get("quantity");

		    // Do something with itemName and quantity
		    System.out.println("Item Name: " + itemName + ", Quantity: " + quantity);
		    
		  }

		     
		 String cellNumber = (String) request.get("cellNumber");
		 Integer totalPrice = (Integer) request.get("totalPrice");
		 String address = (String) request.get("address");

		 
		   System.out.println(cellNumber);
		   System.out.println(totalPrice);
		   System.out.println(address);
		   
		      
	    }

}
