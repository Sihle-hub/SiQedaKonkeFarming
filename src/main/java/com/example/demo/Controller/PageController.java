package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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

}
