package issuetracker.issuetracker.domain.label;

import issuetracker.issuetracker.domain.label.dto.LabelFilterDTO;
import issuetracker.issuetracker.domain.label.dto.LabelListDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class LabelService {

    private final LabelRepository repository;

    public List<LabelListDTO> getLabelList() {
        return repository.getLabelList();
    }

    @Transactional(readOnly = true)
    public List<LabelFilterDTO> getLabelFilter() {
        return repository.getLabelFilter();
    }
}
