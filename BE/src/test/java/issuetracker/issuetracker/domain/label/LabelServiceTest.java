package issuetracker.issuetracker.domain.label;

import issuetracker.issuetracker.domain.label.dto.LabelFilterDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class LabelServiceTest {

    @Autowired
    private LabelService labelService;

    // TODO: DB 변경 후 테스트 수정할 것
    @Test
    @DisplayName("라벨 필터 팝업 데이터는 4개가 저장되어 있으므로, 4개가 나와야 한다.")
    void getLabelFilter() {
        //when
        List<LabelFilterDTO> labelFilter = labelService.getLabelFilter();

        // then
        Assertions.assertThat(labelFilter.size()).isEqualTo(4);
    }
}