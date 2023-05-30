package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.milestone.dto.MilestoneFilterDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
class MilestoneServiceTest {

    @Autowired
    private MilestoneService service;

    @Test
    @DisplayName("설명")
    @Transactional
    void milestoneFilterTest() {
        // when
        List<MilestoneFilterDTO> milestoneFilter = service.getMilestoneFilter();

        // then
        Assertions.assertThat(milestoneFilter.size()).isEqualTo(2);
    }
}