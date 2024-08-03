package org.portfolio.backend.zain.portfolio_backend.Controller;

import java.io.IOException;

import org.portfolio.backend.zain.portfolio_backend.Services.DownloadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.core.io.Resource;

@Controller
public class CVController {
    @Autowired
    private DownloadService dServices;

    @GetMapping("/download-cv")
    public ResponseEntity<Resource> downloadCV() throws IOException {
        return dServices.downloadCV();
    }
}
