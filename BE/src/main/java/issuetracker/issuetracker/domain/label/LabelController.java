package issuetracker.issuetracker.domain.label;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.label.dto.LabelFilterDTO;
import issuetracker.issuetracker.domain.label.dto.LabelListDTO;
import issuetracker.issuetracker.domain.label.dto.PostingLabelDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Tag(name = "posts", description = "issue 메인 API")
@RequestMapping("/labels")
@RequiredArgsConstructor
@RestController
public class LabelController {

    private final LabelService labelService;

    @GetMapping
    public List<LabelListDTO> showLabelList() {
        return new ArrayList<>();
    }

    @GetMapping("/filter")
    public List<LabelFilterDTO> getLabelFilter() {
        return labelService.getLabelFilter();
    }

    @PostMapping
    public void postLabel(@RequestBody PostingLabelDTO label) {
        // TODO 등록 로직 작성


        // redirection 하기
    }

    @DeleteMapping("/{labelId}")
    public void deleteLabel(@RequestParam Long labelId) {
        // TODO 라벨 삭제
    }

    @PutMapping("/{labelId}")
    public void updateLabel(@RequestParam Long labelId, @RequestBody PostingLabelDTO label) {
        // TODO 라벨 수정
    }
}
