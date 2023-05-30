package issuetracker.issuetracker.domain.page;

import io.swagger.v3.oas.annotations.tags.Tag;

import issuetracker.issuetracker.domain.page.dto.CountInfo;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class PageController {

    private final PageService service;


    @GetMapping("/countInfo")
    public CountInfo getCountInfo() {
        return service.getCountInfo();
    }
}
