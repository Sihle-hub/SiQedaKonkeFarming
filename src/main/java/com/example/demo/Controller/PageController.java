package com.example.demo.Controller;

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
	       
		     
		     
		      
	    }

}
