package org.portfolio.backend.zain.portfolio_backend.Controller;

import java.util.List;

import org.portfolio.backend.zain.portfolio_backend.Services.fbServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("http://localhost:3000")
public class FeedbackController {
    @Autowired
    fbServices fbService;

    @GetMapping("/letsconnect")
    public List<Feedback> getAllFeedbacks() {
        return fbService.GetFeedback();
    }

    @PostMapping("/letsconnect")
    public String postFeedback(@RequestBody Feedback fb) {
        // Debugging outputs
        // System.out.println("Received Feedback:");
        // System.out.println("ID: " + fb.getId());
        // System.out.println("Name: " + fb.getName());
        // System.out.println("Email: " + fb.getEmail());
        // System.out.println("Message: " + fb.getMessage());

        String response = fbService.postFeedback(fb);

        // Debugging output for response
        // System.out.println("Response from service: " + response);

        return response;
    }
}
