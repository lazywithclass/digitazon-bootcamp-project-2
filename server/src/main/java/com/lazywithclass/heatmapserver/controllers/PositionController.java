package com.lazywithclass.heatmapserver.controllers;

import com.lazywithclass.heatmapserver.entities.Position;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.lazywithclass.heatmapserver.repository.PositionRepository;

import java.util.List;

@RestController
@CrossOrigin
public class PositionController {

    @Autowired
    private PositionRepository repository;

    @PostMapping("/api/positions")
    public void create(@RequestBody Position position) {
        System.out.println(position);
        repository.save(position);
    }

    @DeleteMapping("/api/positions")
    public void delete() {
        repository.deleteAll();
    }

    @GetMapping("/api/positions/all")
    public List<Position> all() {
        return (List<Position>) repository.findAll();
    }
}
