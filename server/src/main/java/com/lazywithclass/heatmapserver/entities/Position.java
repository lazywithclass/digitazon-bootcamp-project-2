package com.lazywithclass.heatmapserver.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Position {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private int x;
    private int y;
    private long utfTime;

    public Position() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public long getUtfTime() {
        return utfTime;
    }

    public void setUtfTime(long utfTime) {
        this.utfTime = utfTime;
    }

    @Override
    public String toString() {
        return "Position{" +
                "id=" + id +
                ", x=" + x +
                ", y=" + y +
                ", utfTime=" + utfTime +
                '}';
    }
}
