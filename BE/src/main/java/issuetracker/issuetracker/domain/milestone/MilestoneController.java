package issuetracker.issuetracker.domain.milestone;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.milestone.dto.MilestoneFilterDTO;
import issuetracker.issuetracker.domain.milestone.dto.MilestoneListDTO;
import issuetracker.issuetracker.domain.milestone.dto.MilestonePostDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Tag(name = "posts", description = "issue 메인 API")
@RequestMapping("/milestones")
@RequiredArgsConstructor
@RestController
public class MilestoneController {

    private final MileRepository repository;

    @GetMapping
    public List<MilestoneListDTO> showMilestoneList() {
        // TODO 마일스톤 전체 목록 조회
        return new ArrayList<>();
    }

    @PostMapping
    public void postMilestone(@ModelAttribute MilestonePostDTO milestone) {
        // TODO 마일스톤 등록
    }

    @DeleteMapping("/{milestoneId}")
    public void deleteMilestone(@RequestParam Long milestoneId) {
        //TODO 마일스톤 삭제
    }

    @PutMapping("/{milestoneId}")
    public void updateMilestone(@RequestParam Long milestoneId, @RequestBody MilestonePostDTO milestone) {
        //TODO 마일스톤 업데이트
    }

    @GetMapping("/filter")
    public List<MilestoneFilterDTO> getMilestoneFilter() {
        return repository.getMilestoneFilter();
    }

}
