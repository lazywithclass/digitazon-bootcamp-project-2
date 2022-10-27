package com.lazywithclass.heatmapserver.repository;

import com.lazywithclass.heatmapserver.entities.Position;
import org.springframework.data.repository.CrudRepository;

public interface PositionRepository extends CrudRepository<Position, Long> {
}
