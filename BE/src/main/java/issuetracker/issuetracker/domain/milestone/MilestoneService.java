package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.milestone.dto.MileStoneDTO;
import issuetracker.issuetracker.domain.milestone.dto.MilestoneFilterDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.NotNull;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MileRepository repository;

    @Transactional(readOnly = true)
    public List<MilestoneFilterDTO> getMilestoneFilter() {
        return repository.getMilestoneFilter();
    }


    public MileStoneDTO findMilestoneInIssue(AggregateReference<Milestone, @NotNull Long> issue) {
        return repository.findByMilestoneInIssue(issue.getId());
    }
}